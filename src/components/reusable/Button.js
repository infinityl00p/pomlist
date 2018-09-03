import React, { Component } from 'react';
import '../../assets/css/Button.css';

class Button extends Component {
  render() {
  return(
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        type={this.props.type}
        disabled={this.props.disabled}
      >
        {this.props.buttonContent}
      </button>
    );
  }
}

export default Button;