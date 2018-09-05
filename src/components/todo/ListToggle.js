import React, { Component } from 'react';
import Button from '../reusable/Button';
import '../../assets/css/ListToggle.css';

class ListToggle extends Component {
    render() {
        return(
            <div className="list-toggle">
                <Button
                    buttonContent='Incomplete'
                />
                <Button
                    buttonContent='Complete'
                />
            </div>
        );
    }
}

export default ListToggle;