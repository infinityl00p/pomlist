import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoConsole from './TodoConsole';


const todoList = [
    "Voluptate mollit velit culpa nostrud aliquip esse culpa aliqua proident tempor.",
    "Adipisicing deserunt cupidatat laborum tempor esse proident excepteur aute esse consectetur dolor quis. Est laborum aute enim eu nisi deserunt amet ipsum officia. Sit irure occaecat irure minim. Dolore consectetur consequat id est est eu.",
    "Aliquip irure nulla id culpa anim ex non adipisicing irure ut."
]


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            todoList: props.data
        }
    }

    onInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.onAddItem();
    }

    onAddItem = () => {
        if (this.state.inputText) {
            this.props.addItem(this.state.inputText);

            this.setState({ inputText: "" })
        }

        return;
    }

    render() {
        return(
            <section className="todo">
                <AddItem
                    inputValue={this.state.inputText}
                    handleChange={this.onInputChange}
                    handleSubmit={this.onSubmit}
                />
                <TodoConsole
                    todoList={this.state.todoList}
                    handleClick={this.props.handleClick}
                    activeItem={this.props.activeItem}
                />
            </section>
        );
    }
}

export default Todo;