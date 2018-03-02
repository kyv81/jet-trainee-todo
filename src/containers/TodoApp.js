import React from 'react';
import TodoAppHeader from './TodoAppHeader';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onAddTodo = todo => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, todo],
    });
  };

  onChangeTodo = (todo, index) => {
    const todos = this.state.todos.slice();
    todos[index] = todo;
    this.setState({ todos });
  };

  onDeleteTodo = index => {
    const todos = this.state.todos.filter((todo, idx) => idx !== index);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoAppHeader onAddTodo={this.onAddTodo} />
        <TodoList
          onChangeTodo={this.onChangeTodo}
          onDeleteTodo={this.onDeleteTodo}
          todos={todos}
        />
      </div>
    );
  }
}
