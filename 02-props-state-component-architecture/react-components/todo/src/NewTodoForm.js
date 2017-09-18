import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props){
    super(props);

    this.state = {title: '', description: ''};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    this.props.handleNewTodo(this.state.title, this.state.description);
    this.setState({title: '', description: ''});
  }

  render() {
    return (
      <form className={"NewTodoForm"} onSubmit={this.onSubmit}>
        <label htmlFor="title">Title: </label>
        <input onChange={this.handleChange} name="title" id="title" value={this.state.title}/>
        <label htmlFor="description">Description: </label>
        <input onChange={this.handleChange} name="description" id="description" value={this.state.description}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default NewTodoForm;