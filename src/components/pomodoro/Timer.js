import React, { Component } from 'react';
import '../../assets/css/Timer.css';

class Timer extends Component {
    render() {
        return(
            <div className="timer">
                <span className="time time--minutes">
                00
                </span>
                <span className="time">:</span>
                <span className="time time--seconds">
                25
                </span>
            </div>
        );
    }
}

export default Timer;