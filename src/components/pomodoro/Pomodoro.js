import React, { Component } from 'react';
import Timer from './Timer';
import Button from '../reusable/Button';

class Pomodoro extends Component {
    render() {
        return(
            <div className="pomodoro">
                <Timer />
                <Button
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
                />
            </div>
        );
    }
}

export default Pomodoro;