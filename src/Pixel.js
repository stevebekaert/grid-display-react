import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            count: 0
        }
    }

    handleIncrement= () => {
        const counting = this.state.count;
        this.setState({ count: counting + 1});
    }

    render() {
        return (
            <td onMouseEnter={this.handleIncrement}>
                { this.state.count }
            </td>
        )
    }
}

export default Pixel;