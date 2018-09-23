import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
// import { userData } from '../assets/js/data.js';
import '../assets/css/App.css';
import Tomato from '../assets/svg/tomato.svg';

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

  render() {
    const asideClassName = this.state.todoDisabled ? "color-background disabled" : "color-background";

    return (
      <div className="app">
        <main className="app-todo">
          <header className="app__header">
            <div className="app__header-container">
              <img src={Tomato} className="icon" />
              <h1 className="title title--main">Pomodoro List</h1>
              <span className="title title--sub">25 Minute Timer</span>
            </div>
          </header>

          <Todo
            data={this.state.userData}
            handleClick={this.handleTodoItemClick}
            addItem={this.addItem}
            activeItem={this.state.activeItemId}
            disabled={this.state.todoDisabled}
          />

          <aside className={asideClassName}>
            <Pomodoro
              activePomodoro={this.state.activePomodoro}
              incrementPomCount={this.incrementPomCount}
              updateLocalStorage={this.updateLocalStorage}
              disableTodo={this.disableTodo}
              enableTodo={this.enableTodo}
            />
          </aside>

        </main>
      </div>
    );
  }
}

export default App;