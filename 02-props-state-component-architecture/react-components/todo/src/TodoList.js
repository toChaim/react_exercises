import React, { Component } from 'react';
import Todo from "./Todo.js"
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		var todoState = JSON.parse(localStorage.getItem('todoState')) ||
			[{
				title : "procratinate", 
				description : "just do it",
				complete : false}, 
				{title: "panic", 
				description : "in detroit",
				complete :  false}];

		this.state= {
			todoState,
			showNumbers: true,
		}
	}
	handleComplete(idx) {
		let {todoState} = this.state;
		let newTodos = todoState.slice(0);
		newTodos[idx]["complete"] = !newTodos[idx]["complete"];
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({
			todoState : newTodos
		});
	}
	handleRemove(idx) {
		let {todoState} = this.state;
		let newTodos = todoState.slice(0, idx).concat(todoState.slice(idx + 1));
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleNewTodo(title, description){
		let newTodos = this.state.todoState.slice(0);
		newTodos.push({title, description, complete: false});
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleReset(){
		localStorage.removeItem('todoState');
		this.setState({ todoState: [{
				title : "procratinate", 
				description : "just do it",
				complete : false}, 
				{title: "panic", 
				description : "in detroit",
				complete :  false}]});
	}
  	render() {
  		var classes = "TodoList " + (this.state.showNumbers ? 'showNumbers':'');
  		var todos = this.state.todoState.map((val, idx) => 
	  		<Todo title={val.title} 
	  			description={val.description} 
	  			complete={val.complete}
	  			key={idx} 
	  			removeHandler={this.handleRemove.bind(this, idx)}
	  			completeHandler={this.handleComplete.bind(this, idx)}/>
	  		);
    	return (
	      <ol className={classes}>
	        <h1>This is a List</h1><button onClick={this.handleReset.bind(this)}>Reset</button>
	        <NewTodoForm handleNewTodo={this.handleNewTodo.bind(this)}/>
	        <label htmlFor="showForm">Show Form</label>
	        <input type="checkbox" name="showForm" id="showForm" onClick={this.state.showForm} />
	        <div className="clock"></div>
	        	{todos}
	      </ol>
    	);
  	}
}

export default TodoList;