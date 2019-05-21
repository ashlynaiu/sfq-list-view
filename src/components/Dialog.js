import React, { Component } from 'react';
import Icon from './Icon';
import Input from './Input';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.restoreValue = this.restoreValue.bind(this);
    this.commitChangetoCell = this.commitChangetoCell.bind(this);
    this.handleErrorState = this.handleErrorState.bind(this);
    this.dialogChangeHandler = this.dialogChangeHandler.bind(this);
    this.state = {
      inputValue: this.props.data,
      edited: this.props.isDraft,
      error: this.props.hasError
    }
  }

  //Component Initalizes
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  //Handle Clicking of Dialog to dismiss
  handleClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.commitChangetoCell();
  }

  //Handle Enter to Submit
  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.commitChangetoCell();
    }
  }

  dialogChangeHandler(value) {
    return this.setState({
      edited: true,
      inputValue: value
    })
  }
    
  //User is done making changes and needs to save to table cell
  commitChangetoCell() {
    this.props.handleInputUpdate(this.state.inputValue);
    this.props.handleDialog();
  }

  handleErrorState(state) {
    //Set Error State
    if(state) {
      this.props.errorCell(true);
      return this.setState({ error: true })
    }
    //Clear Error State
    this.props.errorCell(false);
    return this.setState({ error: false });
  }

  //Reset the component
  restoreValue() {
    this.setState({
      inputValue: this.props.storedData,
      edited: false,
      error: false
    });
    this.props.handleInputUpdate(this.props.storedData, true);
    return this.props.handleDialog();
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
              <Input data={this.state.inputValue} onKeyPress={this.onKeyPress} errorCell={this.props.errorCell} error={this.state.error} handleErrorState={this.handleErrorState} dialogChangeHandler={this.dialogChangeHandler} />
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