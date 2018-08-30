import React, { Component } from 'react';
import '../../assets/css/TodoListItem.css';

class TodoListItem extends Component {
    render() {
        return(
            <span className="todo-list-item">
              {this.props.description}
            </span>
        );
    }
}

export default TodoListItem;