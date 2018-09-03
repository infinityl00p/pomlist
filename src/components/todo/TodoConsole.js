import React, { Component } from 'react';
import ListToggle from './ListToggle';
import TodoList from './TodoList';
import '../../assets/css/TodoConsole.css';

class TodoConsole extends Component {
    render() {
        return(
            <div className="todo-console">
                <ListToggle />
                <TodoList
                    todoList={this.props.todoList}
                    handleClick={this.props.handleClick}
                    activeItem={this.props.activeItem}
                />
            </div>
        );
    }
}

export default TodoConsole;