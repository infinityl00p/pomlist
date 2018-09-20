import React, { Component } from 'react';
import Input from '../reusable/Input';
import Button from '../reusable/Button';
import '../../assets/css/AddItem.css';

class AddItem extends Component {
    render() {
        return(
            <form className="add-item" onSubmit={this.props.handleSubmit}>
                <Input
                    className={'add-item--input'}
                    placeholder={'Add a task'}
                    onChange={this.props.handleChange}
                    value={this.props.inputValue}
                    disabled={this.props.disabled}
                />
                <div className="button-group clearfix">
                    <Button
                        className={'button--icon button--add'}
                        buttonContent={<i className="fas fa-plus"></i>}
                        type={'submit'}
                        disabled={this.props.disabled}
                    />
                </div>
            </form>
        );
    }
}

export default AddItem;