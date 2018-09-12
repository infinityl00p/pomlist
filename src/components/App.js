import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
// import { userData } from '../assets/js/data.js';
import '../assets/css/App.css';

class App extends Component {
  state = {
    userData: [],
    activeItemId: null,
    todoDisabled: false,
    activePomodoro: {}
  };

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

    this.setState({
      userData,
      activeItemId: id,
      activePomodoro: {
        minutes: 0,
        seconds: 0
      }
    });
  }

  updateCurrentPom = () => {
    var activePomodoro = this.state.userData.filter((object) => {
      if (object.id === this.state.activeItemId) {
        return object.Pomodoro;
      } return false;
    });

    return this.setState({ activePomodoro: activePomodoro[0].Pomodoro });
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
        seconds: 0
      }
    });

    return userData;
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

    this.setState({
      todoDisabled: false,
      updatedUserData
    });
  }

  render() {
    return (
      <div className="app">
        <aside className="hero-pattern-background">
          <Pomodoro
              activePomodoro={this.state.activePomodoro}
              incrementPomCount={this.incrementPomCount}
              disableTodo={this.disableTodo}
              enableTodo={this.enableTodo}
          />
        </aside>
        <main className="app-todo">
          <header className="app__header">
            <h1 className="title title--main color--red">Pomodoro List</h1>
            <span className="title title--sub color--green">Work for 25 minutes, rest for 5, and complete tasks!</span>
          </header>

          <div>
            <Todo
              data={this.state.userData}
              handleClick={this.handleTodoItemClick}
              addItem={this.addItem}
              activeItem={this.state.activeItemId}
              disabled={this.state.todoDisabled}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;