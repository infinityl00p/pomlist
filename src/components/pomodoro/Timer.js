import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/css/Timer.css';

class Timer extends Component {
    state = { 
        minutes: 1,
        seconds: 50
    }

    getElapsedPercentage = () => {
        var ElapsedInSeconds = (this.state.minutes * 60) + this.state.seconds;
        var secondsInTime = 25 * 60;

        return (ElapsedInSeconds / secondsInTime) * 100;
    }

    startTimer = () => { setTimeout(this.updateTime, 1000); }

    updateTime = () => { 
        //FIXME: get the logic right
        if (this.state.seconds == 59) {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 0
            });
        } 
        
        if (this.state.minutes === 24 && this.state.seconds === 59) {
            this.setState({
                minutes: 0,
                seconds: 0
            });
        } else if (this.state.seconds !== 59) {
            this.setState({ seconds: this.state.seconds + 1 }); 
        }
    }

    formatNumber = (rawNumber) => { return ("0" + rawNumber).slice(-2); }

    getTimeString = () => {
        var minutes = this.formatNumber(this.state.minutes);
        var seconds = this.formatNumber(this.state.seconds);

        return minutes + ":" + seconds;
    }

    render() {
        this.startTimer();

        return(
            <div className="progress-bar">
                <CircularProgressbar
                    percentage={this.getElapsedPercentage()}
                    text={this.getTimeString()}
                />
            </div>
        );
    }
}

export default Timer;