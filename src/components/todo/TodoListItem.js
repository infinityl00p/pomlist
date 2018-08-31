import React, { Component } from 'react';
import '../../assets/css/TodoListItem.css';

class TodoListItem extends Component {
    renderTomatoes = (count) => {
        var tomatoes = [];

        for(var i = 0; i < count; i++) {
            const key = "tomato" + (i+1);
            tomatoes.push(<span key={key} className="icon-tomato"></span>)
        }

        return tomatoes;
    }

    render() {
        const itemClass = (this.props.id === this.props.activeItem) ?
            "todo-list-item active"
                :
            "todo-list-item";

        return(
            <div className={itemClass} onClick={() => {
                this.props.handleClick(this.props.id);
            }}>
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