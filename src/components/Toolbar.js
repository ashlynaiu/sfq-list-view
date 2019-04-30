import React, { Component } from 'react';
import Icon from './Icon';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableState: this.props.tableState,
    }
  }

  render() {
    let tableState = this.state.tableState;

    let renderSynced = ()=>{
      return (
        <button>
          Synced to Salesforce
        </button>
      )
    }

    let renderSync = ()=>{
      return (
        <button>
          Synced to Salesforce
        </button>
      )
    }

    let renderError = ()=>{
      return (
        <button>
          Error
        </button>
      )
    }

    let renderSyncState = ()=>{
      if(tableState === 'sync') {
        return renderSynced();
      } else if(tableState === 'save') {
        return renderSync();
      } else if(tableState === 'error') {
        return renderError();
      }
    }

    return (
      <div className="listview-toolbar">
        <button>
          <span className="slds-icon_container slds-current-color quip-icon" title="Description of icon when needed">
            <Icon object="salesforce1" type="utility" size="x-small" />
          </span>
          <span>Salesforce List View</span>
        </button>
        {renderSyncState()}
      </div>
      )
    }
  }

  export default Toolbar;
