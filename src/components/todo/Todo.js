import React, { Component } from 'react';
import AddItem from './AddItem';

class Todo extends Component {
    render() {
        return(
            <div className="todo">
                <AddItem />
            </div>
        );
    }
}

export default Todo;