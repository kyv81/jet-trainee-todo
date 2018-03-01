import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  edit: PropTypes.boolean.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
  }

  handleDelete() {
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  handleEdit() {
    const { id, onEdit } = this.props;
    onEdit(id);
  }

  handleSave() {
    const { id, onSave } = this.props;
    onSave(id);
  }

  handleChangeEdit(e) {
    const { onChange } = this.props;
    onChange(e);
  }

  render() {
    const { text, edit } = this.props;
    return (
      <div className="todo">
        {edit ? (
          <div className="todo_container">
            <input
              type="text"
              className="todo_input"
              defaultValue={text}
              onChange={this.handleChangeEdit}
            />
            <div className="buttons">
              <button onClick={this.handleSave} className="button">
                Saving
              </button>
              <button onClick={this.handleEdit} className="button">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="todo_container">
            <span className="todo__text">{text}</span>
            <div className="buttons">
              <button onClick={this.handleEdit} className="button">
                Editing
              </button>
              <button onClick={this.handleDelete} className="button">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Todo.propTypes = propTypes;

export default Todo;
