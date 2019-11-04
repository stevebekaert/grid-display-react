import React from 'react';

class Pixel extends React.Component {

    render() {
        
        const onMouseOver = this.props.onMouseOver;
        const [ posX, posY ] = [...this.props.position]
        return <td className = {this.props.isColored ? this.props.selectedColor : "white"}
                onMouseOver={() => onMouseOver(posY, posX, this.props.selectedColor) }
                ></td> 
    }
}

export default Pixel;