import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    state = {
        workPeriod: true,
        timerOn: false
    }

    toggleTimer = (event) => {
        this.setState({ timerOn: !this.state.timerOn });
    }

    togglePomState = () => {
        return this.setState({ workPeriod: !this.state.workPeriod })
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
        var classNames = this.getClassNames();
        return(
            <section className="pomodoro">
                <Timer
                    timerOn={this.state.timerOn}
                    workPeriod={this.state.workPeriod}
                    togglePomState={this.togglePomState}
                    toggleTimer={this.toggleTimer}
                />
                <Button
                    buttonContent={<i className={classNames.iconClass}></i>}
                    className={classNames.buttonClass}
                    onClick={this.toggleTimer}
                />
            </section>
        );
    }
}

export default Pomodoro;