import React, { Component } from 'react';
import Icon from './Icon';
import Dialog from './Dialog';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.manageFocus = this.manageFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showDialog: false,
      field: this.props.field,
      edited: false,
      error: false,
      focus: false
		}
  }

  handleDialog() {
    this.setState((prevState) => {
      return { showDialog: !prevState.showDialog };
    });
  }

  handleInputUpdate(inputValue) {
    this.setState({
      field: inputValue,
      edited: true
    });
  }

  manageFocus = (e) => {
    let toggleState = ()=> {
      this.setState({ focus: !this.state.focus });
    }
    //Turn focus on
    if(!this.state.focus) {
      document.addEventListener('mousedown', this.handleClick);
      return toggleState();
    }
    //Turn focus off
    this.props.handleSyncState('change', 1)
    document.removeEventListener('mousedown', this.handleClick);
    return toggleState();
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    return this.manageFocus();
  }

  restoredCell() {
    this.setState({ edited: false });
    this.props.handleSyncState('change', -1)
    return
  }

  errorCell() {
    //Turn error state on
    if(!this.state.error) {
      this.props.handleSyncState('error', 1);
      return this.setState({ error: true});
    }
    //Turn off error state
    this.props.handleSyncState('error', -1);
    return this.setState({ error: false});
  }

  render() {
    let isEdited = this.state.edited ? 'slds-is-edited' : '';
    let isFocused = this.state.focus ? 'slds-has-focus' : '';
    let isError = this.state.error ? 'slds-has-error' : '';

    return (
      <td aria-selected="true" className={`slds-cell-edit ${isEdited} ${isFocused} ${isError}`} role="gridcell" onClick={this.manageFocus} ref={node => this.node = node }>
      <span className="slds-grid slds-grid_align-spread">
        <span className="slds-truncate" title={this.state.field}>{this.state.field}</span>
        <button onClick={this.handleDialog} className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Account Name of Acme - 1,200 Widgets">
          <Icon object="edit" type="utility" size="x-small" editable={true} />
          <span className="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
        </button>
      </span>
      {this.state.showDialog ? <Dialog handleDialog={this.handleDialog} data={this.state.field} isDraft={this.state.edited} handleInputUpdate={this.handleInputUpdate} storedData={this.props.storedData} haserror={this.state.error} /> : null}
    </td>
    )
  }
}

export default Cell;
