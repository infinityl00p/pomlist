import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
	constructor() {
		super();

		this.state = {
			disabled: true,
			timerOn: false,
			currentPomodoro: {}
		}

		setInterval(this.handleTimeChange, 1000);
	}

	componentWillReceiveProps = (nextProps) => {
		const currentPomodoro = nextProps.activePomodoro;

		if (currentPomodoro) {
			this.setState({ disabled: false, currentPomodoro });
		} else {
			this.setState({ disabled: true });
		}
	}


	toggleTodoState = (event) => {
		if(this.state.timerOn) {
			this.props.enableTodo();
		} else { this.props.disableTodo(); }

		this.toggleTimer();
	}

	toggleTimer = () => {
		return this.setState({ timerOn: !this.state.timerOn });
	}

	toggleWorkPeriod = () => {
		const currentPomodoro = this.state.currentPomodoro;
		currentPomodoro.workPeriod = !currentPomodoro.workPeriod;

		return this.setState({ currentPomodoro });
	}

	handleTimeChange = () => {
		if(this.state.timerOn) {
			const maxWorkMinutes = 25,
			maxWorkSeconds = 59,
			maxRestMinutes = 5,
			currentMinutes = this.props.activePomodoro.minutes,
			currentSeconds = this.props.activePomodoro.seconds;

			if (this.state.currentPomodoro.workPeriod) {
				if (currentMinutes === (maxWorkMinutes - 1) && currentSeconds === (maxWorkSeconds)) {
						document.title = "Take a Break";

						this.props.incrementPomCount();
						return this.handleMaxTime();
				}

					this.incrementTime();
			} else if (!this.state.currentPomodoro.workPeriod) {
					if (currentMinutes === (maxRestMinutes - 1)
						&& currentSeconds === maxWorkSeconds) {
							document.title = "Get Back to Work";

							return this.handleMaxTime();
			}

				this.incrementTime();
			}

		return;
		}
	}

	handleMaxTime = () => {
		this.updateTime(0, 0);
		this.toggleTodoState();
		this.toggleWorkPeriod();
	}

	updateTime = (minutes, seconds) => {
		var pomodoro = this.props.activePomodoro;
		pomodoro.minutes = minutes;
		pomodoro.seconds = seconds;

		this.props.updateLocalStorage(minutes, seconds);
		this.setState({ pomodoro });
	}

	incrementTime = () => {
		const seconds = this.props.activePomodoro.seconds,
				minutes = this.props.activePomodoro.minutes;

		if (seconds === 59) {
			return this.updateTime(minutes + 1, 0);
		} else {
			this.updateTime(minutes, seconds + 1);
		}
	}

	getClassNames = () => {
		const className = "button--icon";

		if (this.state.timerOn) {
			return  {
				iconClass: "fas fa-pause",
				buttonClass: className + " pom__button button--close"
			}
		} else {
				return {
					iconClass: "fas fa-play",
					buttonClass: className + " pom__button button--play"
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

		if (this.state.disabled) {
			pomodoroClassName += " disabled";
		}

		if (this.state.currentPomodoro.workPeriod) {
			pomodoroClassName += " work";
		} else if (this.state.currentPomodoro.workPeriod === false) {
			pomodoroClassName += " break";
		}

		return pomodoroClassName;
	}

	render() {
		const buttonClassNames = this.getClassNames();

		return(
			<section className={this.getPomodoroClassName()}>
				<Button
					buttonContent={<i className={buttonClassNames.iconClass}></i>}
					className={buttonClassNames.buttonClass}
					onClick={this.toggleTodoState}
					disabled={this.state.disabled}
				/>

				<Timer
					timerOn={this.state.timerOn}
					workPeriod={this.state.currentPomodoro.workPeriod}
					minutes={this.getMinutes()}
					seconds={this.getSeconds()}
				/>
			</section>
		);
	}
}

export default Pomodoro;