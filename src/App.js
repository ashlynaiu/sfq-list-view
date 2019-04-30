import React, { Component } from 'react';
import Table from './components/Table';
import Icon from './components/Icon';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="listview-container slds-table_edit_container slds-is-relative">
          <h2>My Opportunities in FY20</h2>
          <span className="slds-badge">
            <span className="slds-badge__icon slds-badge__icon_left">
              <span className="slds-icon_container slds-current-color quip-icon" title="Description of icon when needed">
                <Icon object="new_opportunity" type="action" size="x-small" />
              </span>
            </span>Opportunity
          </span>
          <Table handleSyncState={this.handleSyncState} />
          </div>
      </div>
    );
  }
}

export default App;
