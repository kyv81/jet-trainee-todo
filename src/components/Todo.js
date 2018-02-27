import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <input className="todo__checkbox" type="checkbox" />
        <span className="todo__text">Заготовка</span>
        <span className="todo__btn">X</span>
      </div>
    );
  }
}

export default Todo;
