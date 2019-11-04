import React from 'react';
import Pixel from './Pixel';

class pixel {
    constructor(colored, color){
        this.isColored = colored;
        this.color = color;
    }
}

const createTable = () => {
    let grid = [];
    for (let i = 0; i < 16; i++) {
        let row = [];
            for (let j= 0; j < 16; j++) {
                row.push(new pixel(false, "white"));
            }
    grid.push(row)
    }
    return grid;
}

const myGrid = createTable();
console.log(myGrid)

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: myGrid,
            status: "mouseUp",
        }
    }

    onMouseDown = () => {
        this.setState({
            status: "mouseDown"
        })
    return true;
    }

    onMouseUp = () => {
        this.setState({
            status: "mouseUp"
        })
       
    }

    handleOver = (x, y, color) => {
        const updatedGrid = this.state.grid.map((pixels, rowIndex) =>
            pixels.map((pixel, colIndex) => {
                if (y === rowIndex.toString() && x === colIndex.toString()) {
                    pixel.isColored = true;
                    pixel.color = this.props.selectedColor;
                    console.log(color)
                    console.log(pixel.isColored)
                }
            return pixel}))

        this.setState({
            grid: updatedGrid
        })
    }
    
    render = () => {
    let table = this.state.grid;
    return (
        <div>
        <table onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
            <thead></thead>
            <tbody>
                {
                table.map((pixels, rowIndex) => ( 
                    <tr key={rowIndex}>
                        { pixels.map((pixel, colIndex) => (
                            <Pixel 
                                gridHovered={this.state.status}
                                onMouseOver={this.handleOver}
                                isColored={pixel.isColored} /*pixel.colored if use of an object */
                                selectedColor={pixel.color}
                                position={[rowIndex.toString(), colIndex.toString()]}
                                key={"row" + rowIndex.toString() + "col" + colIndex.toString()} /> 
                                )
                        )} 
                    </tr>
                        )
                    ) 
                }
            </tbody>
        </table>
        </div>
    )
    }
}

export default Grid;