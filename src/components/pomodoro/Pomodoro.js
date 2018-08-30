import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import Timer from './Timer';
import Button from '../reusable/Button';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/css/Pomodoro.css';

class Pomodoro extends Component {
    render() {
        const percentage = 66;
        return(
            <div className="pomodoro">
                <div className="progress-bar">
                    <CircularProgressbar
                        percentage={percentage}
                        text={`25:00`}
                    />
                </div>

                {/* <Timer /> */}
                {/* <Button
                    buttonContent={<i className="fas fa-stop"></i>}
                    className={'button--icon button--stop color--red'}
                />
                <Button
                    buttonContent={<i className="fas fa-pause"></i>}
                    className={'button--icon button--pause'}
                />
                <Button
                    buttonContent={<i className="fas fa-play"></i>}
                    className={'button--icon button--play color--green'}
                /> */}
            </div>
        );
    }
}

export default Pomodoro;