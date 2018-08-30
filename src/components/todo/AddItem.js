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
                        className={'button--icon button--add color--blue'}
                        buttonContent={<i className="fas fa-plus"></i>}
                    />
                </div>
            </div>
        );
    }
}

export default AddItem;