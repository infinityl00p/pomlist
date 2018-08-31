import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    state = {
        active: false,
        workPeriod: true,
        timerOn: false
    }

    toggleTimer = (event) => {
        return this.setState({ timerOn: !this.state.timerOn });
    }

    togglePomState = () => {
        return this.setState({ workPeriod: !this.state.workPeriod });
    }

    getClassNames = () => {
        const className = "button--icon";

        if (this.state.timerOn) {
            return  {
                iconClass: "fas fa-stop",
                buttonClass: className + " pom__button button--stop color--red"
            }
        } else {
            return {
                iconClass: "fas fa-play",
                buttonClass: className + " pom__button button--play color--green"
            }
        }
    }


    render() {
        const pomodoroClassName = this.state.active ?  "pomodoro" : "pomodoro inactive";
        const buttonClassNames = this.getClassNames();

        return(
            <section className={pomodoroClassName}>
                <Timer
                    timerOn={this.state.timerOn}
                    workPeriod={this.state.workPeriod}
                    togglePomState={this.togglePomState}
                    toggleTimer={this.toggleTimer}
                />
                <Button
                    buttonContent={<i className={buttonClassNames.iconClass}></i>}
                    className={buttonClassNames.buttonClass}
                    onClick={this.toggleTimer}
                    active={this.state.active}
                />
            </section>
        );
    }
}

export default Pomodoro;