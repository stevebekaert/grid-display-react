import React from 'react';
import Pixel from './Pixel';


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.myGrid = this.createTable();
        this.state = {
            grid: this.createTable()
        }
    }

    mouseEnter = () => {
        console.log("ok");
    }

    createTable = () => {
        let grid = [];
        for (let i = 0; i < 16; i++) {
            let row = [];
                for (let j= 0; j < 16; j++) {
                    row.push('0'); /*PAS ICI*/
                }
        grid.push(row)
        }
        console.log(grid);
        return grid;
    }

    render() {
    return (
        <table>
            {this.myGrid.map(pixel => <Pixel />)}
        </table>
    )
    }
}

export default Grid;