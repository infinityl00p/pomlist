import React, { Component } from 'react';
import '../../assets/css/Input.css';

class Input extends Component {
  render() {
    return(
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;