import React from 'react';
import TodoList from "./TodoList.js"
import './App.css';

const App = () => {
      return <div className="App">
        <h1>Todo App</h1>
          <TodoList />
      </div>;
}

export default App;