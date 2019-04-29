import React, { Component } from 'react';
import Icon from './Icon';
import Row from './Row';
import data from './../model';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: data
		}
  }

  render() {
    const opportunities = this.state.opportunities;
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
            {Object
              .keys(opportunities)
              .map(key => <Row
                key={key}
                index={key}
                opportunity={opportunities[key]} />)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
