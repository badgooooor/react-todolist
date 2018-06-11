import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      todoItems: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  // Add todo to state.
  addTodo(newTodo) {
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    })
  }

  render() {
    let {todoItems} = this.state
    return (
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList items={todoItems}/>
      </div>
    );
  }
}

export default App;
