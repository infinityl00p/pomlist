import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
import { userData } from '../assets/js/data.js';
import '../assets/css/App.css';

class App extends Component {
  state = {
    activeItemId: null
  }

  handleTodoItemClick = (id) => {
    this.setState({
      activeItemId: id
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <header className="app__header">
            <h1 className="title title--main color--red">Pomlist</h1>
            <span className="title title--sub color--green">Get Things Done</span>
          </header>

          <main>
            <Todo
              data={userData}
              handleClick={this.handleTodoItemClick}
              activeItem={this.state.activeItemId}
            />
            <Pomodoro />
          </main>
        </div>
      </div>
    );
  }
}

export default App;