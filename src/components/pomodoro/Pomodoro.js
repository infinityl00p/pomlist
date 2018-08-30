import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    state = { timerState: null }

    startTime = (event) => {
        this.setState({ timerState: 'on' });
    }

    render() {
        return(
            <div className="pomodoro">

                <Timer 
                    timerState={this.state.timerState}
                />
                {/* <Button
                    buttonContent={<i className="fas fa-stop"></i>}
                    className={'button--icon button--stop color--red'}
                /> */}
                {/* <Button
                    buttonContent={<i className="fas fa-pause"></i>}
                    className={'button--icon button--pause'}
                    action={this.startTime}
                /> */}
                <Button
                    buttonContent={<i className="fas fa-play"></i>}
                    className={'button--icon button--play color--green'}
                    action={this.startTime}
                />
            </div>
        );
    }
}

export default Pomodoro;