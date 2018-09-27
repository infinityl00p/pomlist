import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/css/Timer.css';

class Timer extends Component {
    formatTime = (minutes, seconds) => {
        return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    }

    getPercentage = () => {
        var ElapsedInSeconds = (this.props.minutes * 60) + this.props.seconds;
        var secondsInTime = this.props.workPeriod ? (25 * 60) : (5 * 60);

        return (ElapsedInSeconds / secondsInTime) * 100;
    }

    getTimeString = () => {
        var timeString = this.getTimeString();
        document.title = timeString;

        return timeString;
    }

    getTimeString = () => {
        return this.formatTime(this.props.minutes || 0, this.props.seconds || 0);
    }

    getStyles = () => {
        const color = this.getColor(this.props.workPeriod, '#27ae60', '#ff6342');

        return {
            path: { stroke: color },
            text: { fill: color, fontSize: '16px' }
        }
    }

    getColor = (conditional, color1, color2) => {
        return conditional ? color1 : color2;
    }

    setDocumentTitle = (workPeriod, timeString) => {
        if(workPeriod && timeString !== '00:00' && timeString !== '24:59') { document.title = 'Work - ' + timeString; }
        if(!workPeriod && timeString !== '00:00' && timeString !== '4:49') { document.title = 'Break - ' + timeString; }
    }

    render() {
        const styles = this.getStyles();
        const timeString = this.getTimeString();
        this.setDocumentTitle(this.props.workPeriod, timeString);

        return(
            <div className="progress-bar">
                <CircularProgressbar
                    percentage={this.getPercentage()}
                    text={timeString}
                    styles={styles}
                />
            </div>
        );
    }
}

export default Timer;