import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import '../../assets/css/TodoList.css'

class TodoList extends Component {
    render() {
        return(
            <div className="todo-list">
                {
                    this.props.todoList.map((dataObject, i) => {
                        const keyString = `${i}-list-item`;

                        return (
                            <TodoListItem
                                key={keyString}
                                id={dataObject.id}
                                description={dataObject.todo}
                                pomsCompleted={dataObject.completedPoms}
                                handleClick={this.props.handleClick}
                                activeItem={this.props.activeItem}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoList;