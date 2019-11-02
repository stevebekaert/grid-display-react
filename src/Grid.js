import React from 'react';
import Pixel from './Pixel';

const createTable = () => {
    let grid = [];
    for (let i = 0; i < 16; i++) {
        let row = [];
            for (let j= 0; j < 16; j++) {
                row.push(false); /*PAS ICI*/
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
            status: "mouseUp"
        }
    }

    onMouseDown = () => {
        this.setState({
            status: "mouseDown"
        })
      
    }

    onMouseUp = () => {
        this.setState({
            status: "mouseUp"
        })
       
    }

    handleHover = (x, y) => {
        const updatedGrid = this.state.grid.map((pixels, rowIndex) =>
            pixels.map((pixel, colIndex) => {
                if (y === rowIndex.toString() && x === colIndex.toString()) {
                    pixel = true;
                }
            return pixel}))

        this.setState({
            grid: updatedGrid
        })
    }

    
    render = () => {

    let table = this.state.grid;
    
    return (
        <table onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
            <thead></thead>
            <tbody>
                {
                table.map((pixels, rowIndex) => ( 
                    <tr key={rowIndex}>
                        { pixels.map((pixel, colIndex) => (
                            <Pixel 
                                hovered={this.state.status}
                                onMouseOver={this.handleHover}
                                colored={pixel.colored}
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
    )
    }
}

export default Grid;