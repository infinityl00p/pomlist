import React, { Component } from 'react';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="title title--main">Pomlist</h1>
          <span className="title title--sub">Get Things Done</span>
        </header>
      </div>
    );
  }
}

export default App;
