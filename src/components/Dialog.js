import React, { Component } from 'react';
import Icon from './Icon';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.restoreValue = this.restoreValue.bind(this);
    this.state = {
      inputValue: this.props.data,
      edited: false
    }
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.props.handleDialog();
  }

  handleUpdate(event) {
    if(!this.state.edit) {
      this.setState({ edited: true });
    }
    this.setState({ inputValue: event.target.value });
    this.props.handleInputUpdate(event.target.value);
  }

  onKeyPress = event => {
    if (event.key === 'Enter') {
        this.handleClickOutside();
    }
  }

  //disable restore code
  restoreValue() {
    this.props.handleInputUpdate(this.props.storedData);
    this.setState({
      inputValue: this.props.storedData,
      edited: false
    });
  }

  render() {
    let disableRestore = this.state.edited ? 'is-draft' : '';

    return(
      <div ref={node => this.node = node }>
      <section aria-describedby="dialog-body-id-4" className="slds-popover listview-edit" role="dialog">
        <div className="slds-popover__body" id="dialog-body-id-4">
          <div className="slds-form-element slds-grid slds-wrap">
            <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" >
              <abbr className="slds-required" title="required">*</abbr>
              <span className="slds-assistive-text">Company</span>
            </label>
            <div className="slds-form-element__control slds-grow slds-grid">
              <input className="slds-input" id="company-01" required="" type="text" value={this.state.inputValue} onChange={this.handleUpdate} onKeyPress={this.onKeyPress}/>
              <button onClick={this.restoreValue} className={`listview-restore ${disableRestore}`} disabled={!this.state.edited}><Icon object="refresh" type="action" size="x-small" editable={true} /></button>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Dialog;