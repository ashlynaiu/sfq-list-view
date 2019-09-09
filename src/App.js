import React, { Component } from 'react';
import Table from './components/Table';
import Toolbar from './components/Toolbar';
import Icon from './components/Icon';
import data from './model';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTableState = this.updateTableState.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.saveCounter = this.saveCounter.bind(this);
    this.errorCounter = this.errorCounter.bind(this);
    this.state = {
      tableStatus: 'sync',
      storedData: data,
      opportunities: data,
      saveCount: 0,
      errorCount: 0
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

  saveCounter(value) {
    let newCount = this.state.saveCount + value;
    this.setState({ saveCount: newCount});
    return this.updateTableState(newCount, this.state.errorCount);
  }

  errorCounter(value) {
    let newCount = this.state.errorCount + value;
    this.setState({ errorCount: newCount});
    return this.updateTableState(this.state.saveCount, newCount)
  }

  resetAll() {
    console.log('text')
    return this.setState({ 
      opportunities: this.state.storedData,
      errorCount: 0,
      saveCount: 0
    });
  }

  render() {
    return (
      <div className="app">
        <Toolbar tableStatus={this.state.tableStatus} resetAll={this.resetAll} />
        <div className="listview-container slds-table_edit_container slds-is-relative">
          <h2>My Opportunities in FY20</h2>
          <span className="slds-badge">
            <span className="slds-badge__icon slds-badge__icon_left">
              <span className="slds-icon_container slds-current-color quip-icon" title="Description of icon when needed">
                <Icon object="new_opportunity" type="action" size="x-small" />
              </span>
            </span>Opportunity
          </span>
          <Table updateTableState={this.updateTableState} storedData={this.state.storedData} opportunities={this.state.opportunities} saveCounter={this.saveCounter} errorCounter={this.errorCounter}/>
          </div>
      </div>
    );
  }
}

export default App;
