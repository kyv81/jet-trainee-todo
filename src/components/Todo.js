import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  render() {
    const { text } = this.props;
    return (
      <div className="todo">
        <span className="todo__text">- {text}</span>
        <button onClick={this.handleDelete} className="button">
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
