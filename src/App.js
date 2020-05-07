import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      todos: []
    }
  }

  onChange(e) {
    this.setState({input: e.target.value})
  }

  addTodo() {
    var newTodos = this.state.todos
    newTodos.push(this.state.input)
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.header}</h2>
        </div>
        <div className="App-intro">
          <input type="text"
                 placeholder="Enter Todo"
                 value={this.state.input}
                 onChange={this.onChange.bind(this)}
          />
          <button onClick={this.addTodo.bind(this)}>Add New Todo</button>
        </div>
        <ul>
          { this.state.todos.map((todo) =>
            <li key={todo}>{todo}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
