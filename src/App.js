import React, { Component } from 'react';
import Table from './components/Table';
import Toolbar from './components/Toolbar';
import Icon from './components/Icon';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSyncState = this.handleSyncState.bind(this);
    this.manageErrors = this.manageErrors.bind(this);
    this.manageChange = this.manageChange.bind(this);
    this.state = {
      hasError: false,
      hasChange: false,
      tableState: 'sync'
    }
  }

  manageErrors(newCount) {
    let errorCount = 0 + newCount;
    if(errorCount > 0) {
      return this.setState({ hasError: true });
    }
    return this.setState({ hasError: false });
  }

  manageChange(newCount) {
    let currentCount = 0;
    let changerCount = ()=> {
      return currentCount = currentCount + newCount;
    }
    console.log(currentCount);
    return changerCount() > 0 ? this.setState({ hasChange: true }) : this.setState({ hasChange: false });
    // if(changerCount < 0) {
    //   return this.setState({ hasChange: true });
    // }
    // return this.setState({ hasChange: false });
  }

  handleSyncState(type, newCount) {
    //manage errors and changes
    console.log('im at the top')
    if(type === 'error') {
      this.manageErrors(newCount);
      console.log(this.state.hasError);
    } else if(type === 'change') {
      this.manageChange(newCount);
    }

    console.log(this.state.hasChange);
    if(this.state.hasError) {
      return this.setState({ tableState: 'error'})
    } else if(this.state.hasChange) {
      return this.setState({ tableState: 'save'})
    }
    return this.setState({ tableState: 'sync'})
  }

  render() {
    return (
      <div className="app">
        <div className="listview-container slds-table_edit_container slds-is-relative">
          <Toolbar tableState={this.state.tableState} />
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
