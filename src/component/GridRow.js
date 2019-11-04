import React from 'react';
import Pixel from './Pixel';

class GridRow extends React.Component {

    render() {
        /*Till now it worked*/
        return (
            this.props.groupPixels.map(pixel => {
                return <tr onMouseEnter={this.handleIncrement}>{ this.state.count }</tr>
            })
        )
    }
}

export default GridRow;