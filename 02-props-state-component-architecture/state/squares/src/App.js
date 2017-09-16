import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class App extends Component {
  constructor(props) {
    super(props);

    let colors = [];
    for(let i = 0; i < 24; i++) { colors.push(randomColor()) }
    
    this.state = {  
      colors: colors
    };

    setInterval(() => {
      this.setState((prevState, props) => {
        // Updating based on the previous value
        var index = Math.floor( Math.random() * prevState.colors.length);
        var newColor = randomColor();
        var newColors = prevState.colors.map(v => v);
        newColors[index] = newColor;
        return {colors: newColors};
      }, () => {
        // Printing the update to the console
        //console.log(this.state.colors);
      });
    }, 300);
  }


  render() {
    var boxes = this.state.colors.map( (v, i) => <Box color={v} num={i} key={i}/>)

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

export default App;
