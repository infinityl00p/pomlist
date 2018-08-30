import React, { Component } from 'react';
import Input from '../reusable/Input';
import Button from '../reusable/Button';
import '../../assets/css/AddItem.css';

class AddItem extends Component {
    render() {
        return(
            <div className="add-item">
                <Input
                    className={'add-item--input'}
                    placeholder={'eg. complete 1 chapter of my book'}
                />
                <div className="button-group clearfix">
                    <Button
                        className={'button--cancel color--red'}
                        buttonContent={'Cancel'}
                    />
                    <Button
                        className={'button--add color--green'}
                        buttonContent={'Add'}
                    />
                </div>
            </div>
        );
    }
}

export default AddItem;