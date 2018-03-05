import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import types from '../constants';

const propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default class TodoAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: undefined,
      newTodoType: 'high',
    };
  }

  onAddNewTodo = () => {
    if (this.state.newTodoType && this.state.newTodoText) {
      const newTodo = {
        text: this.state.newTodoText,
        type: this.state.newTodoType,
      };
      const { onAddTodo } = this.props;
      this.setState(
        {
          newTodoText: undefined,
        },
        () => onAddTodo(newTodo),
      );
    }
  };

  render() {
    const { newTodoText, newTodoType } = this.state;
    return (
      <div>
        <SelectBox
          options={types}
          value={newTodoType}
          onChange={value => this.setState({ newTodoType: value })}
        />
        <TextBox
          value={newTodoText}
          onChange={value => this.setState({ newTodoText: value })}
        />
        <Button onClick={this.onAddNewTodo}>Добавить</Button>
      </div>
    );
  }
}

TodoAppHeader.propTypes = propTypes;
