import React, { Component } from 'react';
import Button from '../reusable/Button';
import '../../assets/css/TodoListItem.css';

class TodoListItem extends Component {
    renderTomatoes = (count) => {
        const mq = window.matchMedia( "(max-width: 769px)" );
        var tomatoes = [];

        if (mq.matches) {
            tomatoes.push(
                <div>
                    <span className="count">{count}</span>
                    <span className="icon-tomato"></span>
                </div>
            );
        } else {
            for(var i = 0; i < count; i++) {
                const key = "tomato" + (i+1);
                tomatoes.push(<span key={key} className="icon-tomato"></span>)
            }
        }

        return tomatoes;
    }

    trashItem = (e) => {
        e.stopPropagation();
        this.props.trashItem(this.props.id);
    }

    render() {
        const itemClass = (this.props.id === this.props.activeItem) ?
            "todo-list-item active"
                :
            "todo-list-item";

        return(
            <div className={itemClass} onClick={(e) => {
                this.props.handleClick(this.props.id);
            }}>
                <span className="button-container">
                    <Button
                        buttonContent={<i className="far fa-trash-alt"></i>}
                        className="button--trash"
                        onClick={this.trashItem}
                        disabled={this.props.disabled}
                    >
                    </Button>
                </span>

                <span className="description">
                    {this.props.description}
                </span>

                <span className="poms-completed">
                    {this.renderTomatoes(this.props.pomsCompleted)}
                </span>
            </div>
        );
    }
}

export default TodoListItem;