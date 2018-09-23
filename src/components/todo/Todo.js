import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoConsole from './TodoConsole';
import '../../assets/css/Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            todoList: props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({ todoList: nextProps.data });
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

    getClassName = () => {
        if(this.props.disabled) { return "todo disabled"; }
        return "todo";
    }

    render() {
        return(
            <section className={this.getClassName()}>
                <AddItem
                    inputValue={this.state.inputText}
                    handleChange={this.onInputChange}
                    handleSubmit={this.onSubmit}
                    disabled={this.props.disabled}
                />
                <TodoConsole
                    todoList={this.state.todoList}
                    handleClick={this.props.handleClick}
                    activeItem={this.props.activeItem}
                    disabled={this.props.disabled}
                    trashItem={this.props.trashItem}
                />
            </section>
        );
    }
}

export default Todo;