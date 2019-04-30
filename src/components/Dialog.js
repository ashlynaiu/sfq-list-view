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
      edited: this.props.isDraft
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
    if(event.target.value === '') {
      this.handleError(event.target.value);
    }
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

  handleError(value) {
    this.props.errorCell(true);
    return this.setState({ error: true })
  }
  restoreValue() {
    this.setState({
      inputValue: this.props.storedData,
      edited: false
    });
    return this.props.handleInputUpdate(this.props.storedData, false);
  }

  render() {
    let disableRestore = this.state.edited ? 'is-draft' : '';
    let hasError = this.state.error ? 'slds-has-error' : '';

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
              <abbr className="slds-required" title="required">*</abbr>
              <span className="slds-assistive-text">Company</span>
            </label>
            <div className="slds-form-element__control slds-grow slds-grid">
              <input className="slds-input" id="company-01" required="" type="text" value={this.state.inputValue} onChange={this.handleUpdate} onKeyPress={this.onKeyPress}/>
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