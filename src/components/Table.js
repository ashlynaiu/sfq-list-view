import React, { Component } from 'react';
import Icon from './Icon';
import Dialog from './Dialog';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.state = {
      showDialog: false,
      name: 'Acme',
      edited: false
		}
  }

  handleDialog() {
    this.setState((prevState) => {
      return { showDialog: !prevState.showDialog };
    });
  }

  handleInputUpdate(inputValue) {
    return this.setState({
      name: inputValue,
      edited: true
    });
  }

  render() {
    let isEdited = this.state.edited ? 'slds-is-edited' : '';

    return (
      <div className="slds-table_edit_container slds-is-relative">
        <table aria-multiselectable="true" className="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols listview" role="grid">
          <thead>
            <tr className="slds-line-height_reset">
              <th aria-label="Name" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Name">Name</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true}/>
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Name column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-99" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Account Name" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Account Name">Account Name</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true}/>
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Account Name column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-100" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Close Date" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Close Date">Close Date</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true}/>
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Close Date column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Stage" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Stage">Stage</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true} />
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Stage column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-102" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Confidence" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Confidence">Confidence</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true} />
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Confidence column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-103" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Amount" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col" >
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Amount">Amount</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true} />
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Amount column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-104" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
              <th aria-label="Contact" aria-sort="none" className="slds-is-resizable slds-is-sortable" scope="col">
                <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button"  tabIndex="0">
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Contact">Contact</span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <Icon object="arrowdown" type="utility" size="x-small" sortable={true} />
                    </span>
                  </div>
                </a>
                <div className="slds-resizable">
                  <input aria-label="Contact column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-105" max="1000" min="20"  tabIndex="0" type="range" />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr aria-selected="false" className="slds-hint-parent">
              <th className="slds-cell-edit" scope="row">
                <span className="slds-grid slds-grid_align-spread"><a className="slds-truncate" href="javascript:void(0);" id="link-01"  tabIndex="0" title="Acme - 1,200 Widgets">Acme - 1,200 Widgets</a>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Name of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Name of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </th>
              <td aria-selected="true" className={`slds-cell-edit ${isEdited}`} role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title={this.state.name}>{this.state.name}</span>
                  <button onClick={this.handleDialog} className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Account Name of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Account Name of Acme - 1,200 Widgets</span>
                  </button>
                </span>
                {this.state.showDialog ? <Dialog handleDialog={this.handleDialog} data={this.state.name} handleInputUpdate={this.handleInputUpdate} /> : null}
              </td>
              <td className="slds-cell-edit" role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title="4/10/15">4/10/15</span>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Close Date of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Close Date of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </td>
              <td className="slds-cell-edit" role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title="Value Proposition">Value Proposition</span>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Stage of Acme - 1,200 Widgets">
                  <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Stage of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </td>
              <td aria-readonly="true" className="slds-cell-edit" role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title="30%">30%</span>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" disabled=""  tabIndex="0" title="Edit Confidence of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Confidence of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </td>
              <td className="slds-cell-edit" role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title="$25,000,000">$25,000,000</span>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Amount of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true}/>
                    <span className="slds-assistive-text">Edit Amount of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </td>
              <td className="slds-cell-edit" role="gridcell">
                <span className="slds-grid slds-grid_align-spread">
                  <span className="slds-truncate" title="jrogers@acme.com">jrogers@acme.com</span>
                  <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"  tabIndex="0" title="Edit Contact of Acme - 1,200 Widgets">
                    <Icon object="edit" type="utility" size="x-small" editable={true} />
                    <span className="slds-assistive-text">Edit Contact of Acme - 1,200 Widgets</span>
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
