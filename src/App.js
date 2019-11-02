import React from 'react';
import Grid from './Grid';

import './App.css';

class App extends React.Component {
  
  handleMouseDown= () => "mouseDown";

  handleMouseUp = () => "mouseUp";


  render = () => {
    return (
      <div className="App">
        <Grid onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}/>
      </div>
    );
  }
}

export default App;
