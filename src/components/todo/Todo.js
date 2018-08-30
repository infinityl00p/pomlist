import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoConsole from './TodoConsole';

class Todo extends Component {
    render() {
        return(
            <div className="todo">
                <AddItem />
                <TodoConsole />
            </div>
        );
    }
}

export default Todo;