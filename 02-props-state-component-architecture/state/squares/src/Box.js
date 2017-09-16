import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="Box" style={{backgroundColor: this.props.color}}>
      	{this.props.num}
      </div>
    );
  }
}

export default App;