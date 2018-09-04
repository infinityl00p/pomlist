import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    state = {
        disabled: true,
        timerOn: false,
        workPeriod: null
    }

    componentWillReceiveProps = (nextProps) => {
        const currentPomodoro = nextProps.activePomodoro;

        if (currentPomodoro) {
            this.setState({ disabled: false, workPeriod: true, currentPomodoro });
        } else {
            this.setState({ disabled: true });
        }
    }

    startTimer = () => {
        return setTimeout(this.handleTimeChange, 1000);
    }

    stopTimer = () => {
        return clearTimeout(this.startTimer);
    }

    handleToggle = (event) => {
        if(this.state.timerOn) {
            this.props.enableTodo();
        } else { this.props.disableTodo(); }

        this.toggleTimer();
    }

    toggleTimer = () => {
        return this.setState({ timerOn: !this.state.timerOn });
    }

    toggleWorkPeriod = () => {
        const workPeriod = !this.state.workPeriod;

        return this.setState({ workPeriod });
    }

    handleTimeChange = (minutes, seconds) => {
        const maxWorkMinutes = 25,
            maxWorkSeconds = 59,
            maxRestMinutes = 5,
            currentMinutes = this.props.activePomodoro.minutes,
            currentSeconds = this.props.activePomodoro.seconds;

        if (this.state.workPeriod) {
            if (currentMinutes === (maxWorkMinutes - 1)
                && currentSeconds === (maxWorkSeconds)) {
                    this.props.incrementPomCount();
                    return this.handleMaxTime();
            }

            this.incrementTime();
        } else if (!this.state.workPeriod) {
            if (currentMinutes === (maxRestMinutes - 1)
                && currentSeconds === maxWorkSeconds) {
                    return this.handleMaxTime();
            }

            this.incrementTime();
        }

        return;
    }

    handleMaxTime = () => {
        this.updateTime(0, 0);

        this.handleToggle();
        this.toggleWorkPeriod();
    }

    updateTime = (minutes, seconds) => {
        var pomodoro = this.props.activePomodoro;
        pomodoro.minutes = minutes;
        pomodoro.seconds = seconds;

        this.setState({ pomodoro });
    }

    incrementTime = () => {
        const seconds = this.props.activePomodoro.seconds,
            minutes = this.props.activePomodoro.minutes;

        if (seconds === 59) { return this.updateTime(minutes + 1, 0); }
        else { this.updateTime(minutes, seconds + 1); }
    }

    getClassNames = () => {
        const className = "button--icon";

        if (this.state.timerOn) {
            return  {
                iconClass: "fas fa-times",
                buttonClass: className + " pom__button button--close color--red"
            }
        } else {
            return {
                iconClass: "fas fa-play",
                buttonClass: className + " pom__button button--play color--green"
            }
        }
    }

    getMinutes = () => {
        return this.props.activePomodoro.minutes;
    }

    getSeconds = () => {
      return this.props.activePomodoro.seconds;
    }

    getPomodoroClassName = () => {
        var pomodoroClassName = "pomodoro";
        if (this.state.disabled) { pomodoroClassName += " disabled"; }
        if (this.state.workPeriod) { pomodoroClassName += " work"; }

        return pomodoroClassName;
    }

    render() {
        const buttonClassNames = this.getClassNames();

        return(
            <section className={this.getPomodoroClassName()}>
                <Timer
                    timerOn={this.state.timerOn}
                    workPeriod={this.state.workPeriod}
                    startTimer={this.startTimer}
                    stopTimer={this.stopTimer}
                    minutes={this.getMinutes()}
                    seconds={this.getSeconds()}
                />
                <Button
                    buttonContent={<i className={buttonClassNames.iconClass}></i>}
                    className={buttonClassNames.buttonClass}
                    onClick={this.handleToggle}
                    disabled={this.state.disabled}
                />
            </section>
        );
    }
}

export default Pomodoro;