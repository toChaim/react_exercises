import React, { Component } from 'react';

class Todo extends Component {
  render() {
  	var doneClass = "notDone";
  	if(this.props.complete) {
  		doneClass = "done";
  	}
    return (
      <li className={"Todo " + doneClass}>
        <h1>{this.props.title}</h1>
        <p> {this.props.description} </p>
        <button onClick={this.props.removeHandler}>X</button>
        <input type="checkbox" onClick={this.props.completeHandler} checked={this.props.complete} />
      </li>
    );
  }
}

export default Todo;

//<button onSubmit={this.props.addBelowHandler}>Add Below</button>
      