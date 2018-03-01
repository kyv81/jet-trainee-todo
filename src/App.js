import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';

let id = 0;

function getTodoId() {
  id += 1;
  return id;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [
        {
          value: 'Learn React',
          id: 0,
        },
      ],
      edit: false,
      editInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleChangeEdit(e) {
    this.setState({ editInput: e.target.value });
  }

  handleClick() {
    const { inputValue, todos } = this.state;
    const newTodo = { value: inputValue, id: getTodoId() };
    this.setState({ inputValue: '', todos: [...todos, newTodo] });
  }

  handleDelete(idValue) {
    this.setState(state => ({
      todos: state.todos.filter(todo => idValue !== todo.id),
    }));
  }

  handleEdit() {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  }

  handleSave(idValue) {
    const { todos, editInput, edit } = this.state;
    todos.map(
      todo => (todo.value = idValue === todo.id ? editInput : todo.value),
    );
    this.setState({ edit: !edit });
  }

  render() {
    const { inputValue, todos, edit } = this.state;
    return (
      <div className="container">
        <h1 className="title">Todos</h1>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.handleClick}>
          Add
        </button>
        {todos.map(todo => (
          <Todo
            text={todo.value}
            key={todo.id}
            id={todo.id}
            onDelete={this.handleDelete}
            edit={edit}
            onEdit={this.handleEdit}
            onSave={this.handleSave}
            onChange={this.handleChangeEdit}
          />
        ))}
      </div>
    );
  }
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
