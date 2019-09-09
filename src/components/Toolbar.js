import React, { Component } from 'react';
import Icon from './Icon';

class Toolbar extends Component {
  render() {
    let tableStatus = this.props.tableStatus;
    let renderSynced = ()=>{
      return (
        <button className="button-disabled" disabled={true}>
          <span className="slds-icon_container slds-current-color quip-icon" title="Description of icon when needed">
            <Icon object="check" type="utility" size="x-small" />
          </span>
          <span>Synced to Salesforce</span>
        </button>
      )
    }

    let renderSave = ()=>{
      return (
        <button>
          <span className="slds-icon_container slds-current-color" title="Description of icon when needed">
            <Icon object="sync" type="utility" size="x-small" />
          </span>
          <span>Save to Salesforce</span>
        </button>
      )
    }

    let renderError = ()=>{
      return (
        <button className="button-disabled">
          <span className="slds-icon_container slds-current-color" title="Description of icon when needed">
            <Icon object="error" type="utility" size="x-small" />
          </span>
          <span>Fix Errors to Save</span>
        </button>
      )
    }

    let renderSyncState = ()=>{
      if(tableStatus === 'sync') {
        return renderSynced();
      } else if(tableStatus === 'save') {
        return renderSave();
      } else if(tableStatus === 'error') {
        return renderError();
      }
    }

    let renderReset = ()=> {
      return (
        <button onClick={this.props.resetAll}>Discard All Changes</button>
      )
    }
    return (
      <div className="listview-toolbar">
        <button className="quip-salesforce-button">
          <span className="slds-icon_container slds-current-color" title="Description of icon when needed">
            <Icon object="salesforce1" type="utility" size="x-small" />
          </span>
          <span>Salesforce List View</span>
        </button>
        {renderSyncState()}
        {tableStatus === 'sync' ? '' : renderReset()}
      </div>
      )
    }
  }

  export default Toolbar;
