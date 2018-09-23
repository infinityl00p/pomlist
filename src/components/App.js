import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
// import { userData } from '../assets/js/data.js';
import '../assets/css/App.css';
import Tomato from '../assets/svg/tomato_white.svg';

class App extends Component {
  constructor() {
    super();

    const userData = window.localStorage.userData ? JSON.parse(window.localStorage.userData) : [];

    this.state = {
      userData,
      activeItemId: null,
      todoDisabled: false,
      activePomodoro: {}
    };
  }

  handleTodoItemClick = (id) => {
    if (!this.state.todoDisabled) {
      this.setState({
        activeItemId: id
      }, this.updateCurrentPom);
    }
  }

  addItem = (todoString) => {
    const id = Math.floor(Math.random() * 100 + 5);
    const userData = this.addDataNode(todoString, id);

    window.localStorage.userData = JSON.stringify(userData);

    this.setState({
      userData,
      activeItemId: id,
      activePomodoro: {
        minutes: 0,
        seconds: 0,
        workPeriod: true
      }
    });
  }

  addDataNode = (todoString, id) => {
    const userData = this.state.userData;

    userData.push({
      id,
      todo: todoString,
      archive: false,
      completedPoms: 0,
      Pomodoro: {
        minutes: 0,
        seconds: 0,
        workPeriod: true
      }
    });

    return userData;
  }

  trashItem = (itemId) => {
    let confirm = window.confirm('Are you sure you want to permanently delete this item?');

    if (confirm) {
      let userData = this.state.userData;

      userData = userData.filter((pomodoro) => {
        return pomodoro.id !== itemId;
      });

      window.localStorage.userData = JSON.stringify(userData);

      return this.setState({ userData });
    }

    return;
  }

  updateCurrentPom = () => {
    var activePomodoro = this.state.userData.filter((object) => {
      if (object.id === this.state.activeItemId) {
        return object.Pomodoro;
      } return false;
    });

    return this.setState({ activePomodoro: activePomodoro[0].Pomodoro });
  }

  incrementPomCount = () => {
    var updatedUserData = this.state.userData;

    updatedUserData.map((todoItem) => {
      if(todoItem.id === this.state.activeItemId) {
        const completedPoms = todoItem.completedPoms + 1;
        todoItem.completedPoms = completedPoms;

        return todoItem;
      } else { return todoItem; }
    });

    window.localStorage.userData = JSON.stringify(updatedUserData);
    this.setState({ userData: updatedUserData });
  }

  disableTodo = () => {
    this.setState({ todoDisabled: true });
  }

  enableTodo = () => {
    var updatedUserData = this.state.userData;

    updatedUserData.map((todoItem) => {
      if(todoItem.id === this.state.activeItemId) {
        todoItem.Pomodoro = this.state.activePomodoro;

        return todoItem;
      } else { return todoItem; }
    });


    window.localStorage.userData = JSON.stringify(updatedUserData);
    this.setState({
      todoDisabled: false,
      updatedUserData
    });
  }

  updateLocalStorage = (minutes, seconds) => {
    var updatedUserData = this.state.userData;

    updatedUserData.map((todoItem) => {
      if(todoItem.id === this.state.activeItemId) {
        todoItem.Pomodoro.minutes = minutes;
        todoItem.Pomodoro.seconds = seconds;


        return todoItem;
      } else { return todoItem; }
    });

    window.localStorage.userData = JSON.stringify(updatedUserData);
  }

  getPomodoroClassName = () => {
    let pomodoroClassName = "color-background";
    const activePomodoro = this.state.activePomodoro;

    if (this.state.activeItemId) {
      if (activePomodoro.workPeriod) {
        pomodoroClassName += " work";
      } else {
        pomodoroClassName += " break";
      }
    }

    return pomodoroClassName;
  }

  render() {
    return (
      <div className="app">
        <main className="app-todo">
          <header className="app__header">
            <div className="app__header-container">
              <img src={Tomato} className="icon" alt="pomlist icon" />
              <h1 className="title title--main">Pomlist</h1>
            </div>

            <div className={this.getPomodoroClassName()}>
              <Pomodoro
              activePomodoro={this.state.activePomodoro}
                incrementPomCount={this.incrementPomCount}
                updateLocalStorage={this.updateLocalStorage}
                disableTodo={this.disableTodo}
                enableTodo={this.enableTodo}
              />
            </div>
          </header>

          <Todo
            data={this.state.userData}
            handleClick={this.handleTodoItemClick}
            addItem={this.addItem}
            activeItem={this.state.activeItemId}
            disabled={this.state.todoDisabled}
            trashItem={this.trashItem}
          />

        </main>
      </div>
    );
  }
}

export default App;