import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
import { userData } from '../assets/js/data.js';
import '../assets/css/App.css';

class App extends Component {
  state = {
    userData: userData,
    activeItemId: null,
    activePomodoro: {}
  };

  handleTodoItemClick = (id) => {
    this.setState({
      activeItemId: id
    }, this.updateCurrentPom);
  }

  addItem = (todo) => {
    const userData = this.state.userData;

    userData.push({
      id: Math.floor(Math.random() * 100 + 5),
      todo,
      archive: false,
      completedPoms: 0
    });

    this.setState({ userData });
  }

  updateCurrentPom = () => {
    var activePomodoro = this.state.userData.filter((object) => {
      if (object.id === this.state.activeItemId) {
        return object.Pomodoro;
      }
    });

    return this.setState({ activePomodoro: activePomodoro[0].Pomodoro });
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
              data={this.state.userData}
              handleClick={this.handleTodoItemClick}
              addItem={this.addItem}
              activeItem={this.state.activeItemId}
            />
            <Pomodoro
              activePomodoro={this.state.activePomodoro}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;