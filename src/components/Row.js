import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    const fields = this.props.opportunity;

    //hack to check confidence
    let isCellLocked = (value)=> {
      if(value.includes('%')) {
        return true;
      }
    }

    return (
        <tr aria-selected="false" className="slds-hint-parent">
          {Object
            .keys(fields)
            .map(key => <Cell
              key={key}
              field={fields[key]}
              storedData={this.props.storedData[key]}
              islocked={isCellLocked(fields[key])}
              saveCounter={this.props.saveCounter}
              errorCounter={this.props.errorCounter}
              />)
          }
        </tr>
    )
  }
}

export default Row;
