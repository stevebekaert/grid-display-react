import React from 'react';

class Pixel extends React.Component {

    render() {
        
        const onMouseOver = this.props.onMouseOver;
        const [ posX, posY ] = [...this.props.position]
        return <td className = {this.props.isColored ? "black" : "white"}

                onMouseOver={this.props.gridHovered === "mouseDown" ?
                    () => onMouseOver(posY, posX):
                    ''}

                ></td> 
    }
}

export default Pixel;