import React from 'react';
import UserInterface from './UserInterface';


import './App.css';

class App extends React.Component {


  colorSelection = (color) => {
    this.setState = ({
        selectedColor : color
    })
}

  render = () => {
    return (
      <div className="App">
        <UserInterface/>
      </div>
    );
  }
}

export default App;
