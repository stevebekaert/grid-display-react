import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colored: false
        }
    }

    render() {
        /*Till now it worked*/
        const onMouseEnter = this.props.onMouseEnter;

        return <td 
                onMouseEnter={() => onMouseEnter(this.props.position[1], this.props.position[0])}
                style={{
                    backgroundColor: this.props.backgroundColor}}
                ></td> 
    }
}

export default Pixel;