import React, { Component } from 'react';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  render() {
    return(
      <div ref={node => this.node = node }>
      <section aria-describedby="dialog-body-id-4" className={`slds-popover listview-edit`} role="dialog">
        <div className="slds-popover__body" id="dialog-body-id-4">
          <div className="slds-form-element slds-grid slds-wrap">
            <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" >
              <abbr className="slds-required" title="required">*</abbr>
              <span className="slds-assistive-text">Company</span>
            </label>
            <div className="slds-form-element__control slds-grow">
              <input className="slds-input" id="company-01" required="" type="text" value="Acme Enterprises" />
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Dialog;