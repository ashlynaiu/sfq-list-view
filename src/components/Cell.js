import React, { Component } from 'react';
import Icon from './Icon';
import Dialog from './Dialog';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.state = {
      showDialog: false,
      field: '',
      edited: false
		}
  }
  componentDidMount() {
    this.setState({ field: this.props.field})
  }
  handleDialog() {
    this.setState((prevState) => {
      return { showDialog: !prevState.showDialog };
    });
  }

  handleInputUpdate(inputValue) {
    return this.setState({
      field: inputValue,
      edited: true
    });
  }

  render() {
    let isEdited = this.state.edited ? 'slds-is-edited' : '';

    return (
      <td aria-selected="true" className={`slds-cell-edit ${isEdited}`} role="gridcell">
      <span className="slds-grid slds-grid_align-spread">
        <span className="slds-truncate" title={this.state.field}>{this.state.field}</span>
        <button onClick={this.handleDialog} className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Account Name of Acme - 1,200 Widgets">
          <Icon object="edit" type="utility" size="x-small" editable={true} />
          <span className="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
        </button>
      </span>
      {this.state.showDialog ? <Dialog handleDialog={this.handleDialog} data={this.state.field} handleInputUpdate={this.handleInputUpdate} /> : null}
    </td>
    )
  }
}

export default Cell;
