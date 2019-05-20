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
    this.errorCell = this.errorCell.bind(this);
    this.state = {
      showDialog: false,
      field: this.props.field,
      locked: this.props.islocked,
      comment: false,
      edited: false,
      error: false,
      focus: false
		}
  }

  componentWillMount(){
    if(this.props.field === '5/10/2019') {
      return this.setState({ comment: true});
    }
  }
  handleDialog() {
    this.setState((prevState) => {
      return { showDialog: !prevState.showDialog };
    });
  }

  //Passing Props to update cell value
  //Passing true into restore variable will reset the cell
  handleInputUpdate(inputValue, restore) {
    if(restore) {
      this.setState({ field: inputValue });
      return this.restoredCell();
    }
    if(inputValue !== this.state.field) {
      this.props.saveCounter(1);
      this.setState({ edited: true });
    }
    return this.setState({ field: inputValue });
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
    if(this.state.error) {
      this.props.errorCounter(-1);
    }
    this.props.saveCounter(-1);
    return this.setState({
      edited: false,
      error: false
    });
  }

  errorCell(value) {
    //Turn error state on
    if(value) {
      this.props.errorCounter(1)
      return this.setState({ error: true});
    }
    //Turn off error state
    this.props.errorCounter(-1)
    return this.setState({ error: false});
  }

  render() {
    let isEdited = this.state.edited ? 'slds-is-edited' : '';
    let isFocused = this.state.focus ? 'slds-has-focus' : '';
    let isError = this.state.error ? 'slds-has-error' : '';
    let isLocked = this.state.locked ? 'cell-locked' : '';
    let hasComment = this.state.comment ? 'cell-comment' : '';

    let renderEditButton = ()=> {
      return(
        <button onClick={this.handleDialog} className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Account Name of Acme - 1,200 Widgets"> 
          <Icon object="edit" type="utility" size="x-small" editable={true} />
          <span className="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
        </button>
      )
    }

    let renderLock = ()=> {
      return (<Icon object="lock" type="utility" size="x-small"/>)
    }
    return (
      <td aria-selected="true" className={`slds-cell-edit ${isEdited} ${isFocused} ${isError} ${isLocked} ${hasComment}`} role="gridcell" onClick={this.manageFocus} ref={node => this.node = node }>
      <span className="slds-grid slds-grid_align-spread">
        <span className="slds-truncate" title={this.state.field}>{this.state.field}</span>
        {this.state.locked ? renderLock() : renderEditButton()}
      </span>
      <img src={require(`../icons/comment.png`)} alt="This cell has a comment" />
      {this.state.showDialog ? <Dialog handleDialog={this.handleDialog} data={this.state.field} isDraft={this.state.edited} hasError={this.state.error} handleInputUpdate={this.handleInputUpdate} storedData={this.props.storedData} errorCell={this.errorCell} /> : null}
    </td>
    )
  }
}

export default Cell;
