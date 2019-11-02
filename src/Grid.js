import React from 'react';
import Pixel from './Pixel';

const createTable = () => {
    let grid = [];
    for (let i = 0; i < 32; i++) {
        let row = [];
            for (let j= 0; j < 32; j++) {
                row.push('0'); /*PAS ICI*/
            }
    grid.push(row)
    }
    return grid;
}

const myGrid = createTable();

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
    
    render = () => {
    return (
        <table onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
            <thead></thead>
            <tbody>
                {
                this.state.grid.map((pixels, rowIndex) => ( 
                    <tr>
                        { pixels.map((pixel, colIndex) => (
                            <Pixel 
                                pixel={pixel}
                                hovered = {this.state.status}
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