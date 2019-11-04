import React from 'react';

class UserPicInterface extends React.Component {

    render() {
        return (
            <div className="selection-container">
                <div className="selection">
                    <div onClick={() => this.props.onClick("red")}>Red</div>
                    <div onClick={() => this.props.onClick("green")}>Green</div>
                    <div onClick={() => this.props.onClick("blue")}>Blue</div>
                </div>
            </div>
        )
    }
}

export default UserPicInterface;