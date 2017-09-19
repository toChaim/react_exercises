import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      complete: this.props.complete
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit',e,this.state,this.props.handleAction);
    this.props.handleAction(this.state);
  }

  render() {
    if(this.props.handleAction){
      return (
        <li className={"Todo " + (this.props.complete? 'done':'notDone')}>
          <form className="Todo" onSubmit={this.handleSubmit}>
            <div className="controle"><input type="checkbox" onClick={this.props.handleCompleate} checked={this.props.complete} /></div>
            <div className="title"><input name="title" onChange={this.handleChange} value={this.state.title}/></div>
            <div className="description"><input name="description" onChange={this.handleChange} value={this.state.description}/></div>
            <div className="controle"><input type="submit" value={this.props.actionLabel} /></div>
          </form>
        </li>
      ); 
    }else{
      return (
        <li className={"Todo " + (this.props.complete? 'done':'notDone')}>
          <div className="controle">
            <input type="checkbox" onClick={this.props.handleCompleate} checked={this.props.complete} />
          </div>
          <div className="title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="description">
            <p> {this.props.description} </p>
          </div>
          <div className="controle">
            <button onClick={this.props.removeHandler}>X</button>
            <button onClick={this.props.editHandler}>Edit</button>
          </div>
        </li>
      );  
    }
    
  }
}

export default Todo;

//<button onSubmit={this.props.addBelowHandler}>Add Below</button>
      