import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import '../../assets/css/TodoList.css'

class TodoList extends Component {
    render() {
        return(
            <div className="todo-list">
                <TodoListItem
                    description={'Aute cillum incididunt nulla occaecat adipisicing ad.'}
                />
                <TodoListItem
                    description={'Amet laboris aute in ullamco ea aute ut do ex ea excepteur aliquip cupidatat nulla.'}
                />
                <TodoListItem
                    description={'Aliqua velit voluptate et Lorem amet deserunt exercitation commodo do adipisicing velit.'}
                />
            </div>
        );
    }
}

export default TodoList;