import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import '../../assets/css/TodoList.css'

class TodoList extends Component {
    render() {
        return(
            <div className="todo-list">
                {
                    this.props.todoList.map((listItem, i) => {
                        const keyString = i + "-" + "list-item";

                        return (
                            <TodoListItem
                                key={keyString}
                                description={listItem}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;