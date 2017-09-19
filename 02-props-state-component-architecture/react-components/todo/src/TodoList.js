import React, { Component } from 'react';
import Todo from "./Todo.js"

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
		this.handleReset = this.handleReset.bind(this);
	}
	handleComplete(idx) {
		let newTodos = this.state.todoState.slice();
		newTodos[idx]["complete"] = !newTodos[idx]["complete"];
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleRemove(idx) {
		let {todoState} = this.state;
		let newTodos = todoState.filter((v, i) => i !== idx);
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleEdit(idx) {
		let newTodos = this.state.todoState.slice();
		newTodos[idx]["handleAction"] = this.handleUpdate.bind(this, idx);
		newTodos[idx]["actionLabel"] = 'Save';
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleUpdate(idx, stateObj){
		let newTodos = this.state.todoState.slice();
		newTodos[idx] = stateObj;
		localStorage.setItem('todoState', JSON.stringify(newTodos));
		this.setState({ todoState : newTodos });
	}
	handleAdd(stateObj){
		let newTodos = this.state.todoState.slice(0);
		newTodos.push(stateObj);
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
	  		<Todo 
	  			title={val.title} 
	  			description={val.description} 
	  			complete={val.complete}
	  			key={idx} 
	  			removeHandler={this.handleRemove.bind(this, idx)}
	  			editHandler={this.handleEdit.bind(this, idx)}
	  			handleCompleate={this.handleComplete.bind(this, idx)}
	  			handleAction={ val.handleAction }
	  			actionLabel={ val.actionLabel }
	  		/>);
    	return (
	      <ol className={classes}>
	        <h1>This is a List</h1>
    		<button onClick={this.handleReset}>Reset</button>
	        <li className={"Todo"}>
	          <div ><h2>Done</h2></div>
	          <div className="title"><h2>Title</h2></div>
	          <div className="description"><h2>Description</h2></div>
	          <div ><h2>Delete</h2></div>
	        </li>
        	<Todo title="" description="" handleAction={this.handleAdd.bind(this)} actionLabel="Add"/>
	        {todos}
	      </ol>
    	);
  	}
}

export default TodoList;