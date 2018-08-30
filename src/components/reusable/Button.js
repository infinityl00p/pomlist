import React, { Component } from 'react';
import '../../assets/css/Button.css';

class Button extends Component {
  render() {
    return(
      <button className={this.props.className}>
        {this.props.buttonContent}
      </button>
    );
  }
}

export default Button;