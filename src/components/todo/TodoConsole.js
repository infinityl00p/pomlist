import React, { Component } from 'react';
import ListToggle from './ListToggle';
import TodoList from './TodoList';

class TodoConsole extends Component {
    render() {
        return(
            <div className="todo-console">
                <ListToggle />
                <TodoList />
            </div>
        );
    }
}

export default TodoConsole;