import React, { Component } from 'react';
import Todo from './todo/Todo';
import Pomodoro from './pomodoro/Pomodoro';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="title title--main">Pomlist</h1>
          <span className="title title--sub">Get Things Done</span>
        </header>

        <main>
          <Todo />
          <Pomodoro />
        </main>
      </div>
    );
  }
}

export default App;
