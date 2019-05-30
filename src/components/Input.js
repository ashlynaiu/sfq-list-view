import React, { Component } from 'react';
import Icon from './Icon';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: this.props.input,
    }
  }

  handleChange(event) {
    if(event.target.value === '') {
      this.props.handleErrorState(true);
    }
    if(this.props.error && event.target.value !== '') {
      this.props.handleErrorState(false);
    }
    this.props.dialogChangeHandler(event.target.value)
    return  this.setState({ inputValue: event.target.value })
  }

  render() {
    const type = this.props.staticData.type;
    const options = this.props.staticData.options;
    let hasDate = type === 'date' ? 'slds-input-has-icon slds-input-has-icon_right' : '';

    let isSelect = ()=> {
      return (
        <div className="slds-select_container slds-grow">
          <select className="slds-select" value={this.state.inputValue} onChange={this.handleChange}>
            {Object
            .keys(options)
            .map(key => <option
              key={key}
              value={options[key]}
              >{options[key]}</option>)
            }
          </select>
        </div>
      )
    }

    let isString = ()=> {
      return(
        <input className="slds-input" id="company-01" required="" type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.props.onKeyPress}/>
      )
    }

    let isDate = ()=> {
      return (
        <span>
          <Icon object="event" type="utility" size="x-small" rightInputIcon={true} />
          <input type="text" id="text-input-id-1" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.props.onKeyPress} className="slds-input" />
        </span>
      )
    }

    let isCurrency = ()=> {
      return (
        <input className="slds-input" id="company-01" required="" type="string" pattern="^-?[0-9]\d*\.?\d*$" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.props.onKeyPress}/>
      )
    }

    return(
      <div className={`slds-form-element__control slds-grow slds-grid1 ${hasDate}`}>
        {type === 'string' ? isString() : ''}
        {type === 'picklist' ? isSelect() : ''}
        {type === 'date' ? isDate() : ''}
        {type === 'currency' ? isCurrency() : ''}
      </div>
    );
  }
}

export default Input;