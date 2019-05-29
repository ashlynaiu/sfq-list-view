import React, { Component } from 'react';
// import Icon from './Icon';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: this.props.input,
    }
  }
  // componentDidMount() {
  //   console.log(this.props.type);
  // }
  //Handle onChange to update state to edited is ture
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
    console.log(options);
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
    return(
      <div className="slds-form-element__control slds-grow slds-grid">
        {type === 'string' ? isString() : ''}
        {type === 'picklist' ? isSelect() : ''}
      </div>
    );
  }
}

export default Input;