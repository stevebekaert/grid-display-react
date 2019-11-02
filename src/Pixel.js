import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            painted: false
        }
    }

    handleMouseEnter= () => {
        this.setState({ painted : true});
    }

    render() {
        /*Till now it worked*/
        return <td 
                onMouseEnter={this.props.hovered === "mouseDown" ?
                this.handleMouseEnter:
                undefined}
                style={{
                backgroundColor: this.state.painted ? 'black' : 'white' }}></td> 
    }
}

export default Pixel;