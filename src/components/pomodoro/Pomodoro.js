import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    state = { timerOn: false }

    toggleTimer = (event) => {
        this.setState({ timerOn: !this.state.timerOn });
    }

    getButtonClass = () => {
        const className = "button--icon";

        if (this.state.timerState) {
            return className + " button--play color--green"
        } else {
            return className + " button--pause color--red"
        }
    }

    render() {
        return(
            <div className="pomodoro">

                <Timer 
                    timerOn={this.state.timerOn}
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
                    className={this.getButtonClass()}
                    action={this.toggleTimer}
                />
            </div>
        );
    }
}

export default Pomodoro;