import React, { Component } from 'react';
import Icon from './Icon';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.restoreValue = this.restoreValue.bind(this);
    this.state = {
      inputValue: this.props.data,
      edited: this.props.isDraft,
      error: this.props.hasError
    }
  }

  //update state needs fixing 
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  //Handle Clicking of Dialog to dismiss
  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.props.handleDialog();
  }

  //Handle Enter to Submit
  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.handleInputUpdate(event.target.value);
      this.handleClickOutside(event.target.value);
    }
  }

  handleError(value) {
    this.props.errorCell(true);
    return this.setState({ error: true })
  }

  //Handle onChange to update state to edited is ture
  handleChange(event) {
    if(event.target.value === '') {
      this.handleError(event.target.value);
    }
    return this.setState({ 
      edited: true,
      inputValue: event.target.value
    })
  }

  //Reset the component
  restoreValue() {
    this.setState({
      inputValue: this.props.storedData,
      edited: false,
      error: false
    });
    return this.props.handleInputUpdate(this.props.storedData, true);
  }

  render() {
    let disableRestore = this.state.edited ? 'is-draft' : '';

    let errorWarning = ()=> {
      return (
        <div id="error-message-01" className="slds-form-element__help">This field is required</div>
      )
    }

    return(
      <div ref={node => this.node = node }>
      <section aria-describedby="dialog-body-id-4" className="slds-popover listview-edit" role="dialog">
        <div className="slds-popover__body" id="dialog-body-id-4">
          <div className="slds-form-element slds-grid slds-wrap">
            <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" >
              <span className="slds-assistive-text">Company</span>
            </label>
            <div className="slds-form-element__control slds-grow slds-grid">
              <input className="slds-input" id="company-01" required="" type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
              <button onClick={this.restoreValue} className={`listview-restore ${disableRestore}`} disabled={!this.state.edited}><Icon object="refresh" type="action" size="x-small" editable={true} /></button>
            </div>
            {this.state.error ? errorWarning() : ''}
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Dialog;