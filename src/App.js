import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="input" placeholder="Тут будет текст" />
        <Todo />
      </div>
    );
  }
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
