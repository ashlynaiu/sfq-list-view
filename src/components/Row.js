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
              field={fields[key].value}
              storedData={this.props.storedData[key].value}
              isLocked={fields[key].locked}
              saveCounter={this.props.saveCounter}
              errorCounter={this.props.errorCounter}
              />)
          }
        </tr>
    )
  }
}

export default Row;
