import React, { Component } from 'react';
// import Icon from './Icon';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: this.props.data,
    }
  }

  //Handle onChange to update state to edited is ture
  handleChange(event) {
    if(event.target.value === '') {
      this.props.handleErrorState(true);
    }
    if(this.state.error && event.target.value !== '') {
      this.props.handleErrorState(false);
    }
    return this.props.dialogChangeHandler(event.target.value)
  }

  render() {
    return(
      <span>
        <input className="slds-input" id="company-01" required="" type="text" value={this.state.inputValue} onChange={this.handleChange(event)} onKeyPress={this.props.onKeyPress}/>
      </span>
    );
  }
}

export default Dialog;