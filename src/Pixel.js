import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colored: false
        }
    }

    handleMouseOver= () => {
        this.setState({ colored : true});
        return this.state.colored;
    }

    render() {
        /*Till now it worked*/
        const onMouseOver = this.props.onMouseOver;

        return <td 
                onMouseEnter={this.props.hovered === "mouseDown" ?
                    () => onMouseOver(this.props.position[1], this.props.position[0]):
                undefined}
             
                onMouseOver={this.props.hovered === "mouseDown" ?
                this.handleMouseOver:
                undefined}
                style={{
                backgroundColor: this.state.colored ? 'black' : 'white' }}></td> 
    }
}

export default Pixel;