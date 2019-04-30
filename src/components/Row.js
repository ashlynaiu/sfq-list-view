import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    const fields = this.props.opportunity;
    return (
        <tr aria-selected="false" className="slds-hint-parent">
          {Object
            .keys(fields)
            .map(key => <Cell
              key={key}
              index={key}
              field={fields[key]}
              storedData={this.props.storedData[key]}
              handleSyncState={this.props.handleSyncState}
              />)
          }
        </tr>
    )
  }
}

export default Row;
