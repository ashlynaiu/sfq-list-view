import React, { Component } from 'react';
import Table from './components/Table';
import Toolbar from './components/Toolbar';
import Icon from './components/Icon';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTableState = this.updateTableState.bind(this);
    this.state = {
      tableStatus: 'sync'
    }
  }

  updateTableState(changeCounter, errorCounter) {
    if(errorCounter > 0) {
      return this.setState({ tableStatus: 'error' });
    }
    if(changeCounter > 0) {
      return this.setState({ tableStatus: 'save' });
    }
    return this.setState({ tableStatus: 'sync'})
  }
  render() {
    return (
      <div className="app">
        <Toolbar tableStatus={this.state.tableStatus} />
        <div className="listview-container slds-table_edit_container slds-is-relative">
          <h2>My Opportunities in FY20</h2>
          <span className="slds-badge">
            <span className="slds-badge__icon slds-badge__icon_left">
              <span className="slds-icon_container slds-current-color quip-icon" title="Description of icon when needed">
                <Icon object="new_opportunity" type="action" size="x-small" />
              </span>
            </span>Opportunity
          </span>
          <Table updateTableState={this.updateTableState}/>
          </div>
      </div>
    );
  }
}

export default App;
