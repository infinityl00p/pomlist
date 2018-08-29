import React, { Component } from 'react';
import '../../assets/css/AddItem.css';

class AddItem extends Component {
    render() {
        return(
            <div className="add-item">
                <input className="add-item--input"/>
            </div>
        );
    }
}

export default AddItem;