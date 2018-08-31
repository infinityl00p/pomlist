import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoConsole from './TodoConsole';


const todoList = [
    "Voluptate mollit velit culpa nostrud aliquip esse culpa aliqua proident tempor.",
    "Adipisicing deserunt cupidatat laborum tempor esse proident excepteur aute esse consectetur dolor quis. Est laborum aute enim eu nisi deserunt amet ipsum officia. Sit irure occaecat irure minim. Dolore consectetur consequat id est est eu.",
    "Aliquip irure nulla id culpa anim ex non adipisicing irure ut."
]


class Todo extends Component {
    state = {
        inputText: "",
        todoList: todoList
    };

    onInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    }

    onAddItem = () => {
        if (this.state.inputText) {
            const newList = this.state.todoList;
            newList.push(this.state.inputText);
            console.log(newList);
            this.setState({ todoList: newList })
        }

        return;
    }

    render() {
        return(
            <div className="todo">
                <AddItem
                    inputValue={this.state.inputText}
                    handleChange={this.onInputChange}
                    handleClick={this.onAddItem}
                />
                <TodoConsole
                    todoList={this.state.todoList}
                />
            </div>
        );
    }
}

export default Todo;