import React from 'react';
import Grid from './Grid'
import UserPicInterface from './UserPicInterface';

class UserInterface extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "black"
        }
    }

    colorSelector = (color) => {
        this.setState({
            selectedColor: color
        })
    }

    render() {
        return (
        <div>
            <Grid selectedColor={this.state.selectedColor}/>
            <UserPicInterface onClick={this.colorSelector}/>
        </div>
        )
    }
}


export default UserInterface;
