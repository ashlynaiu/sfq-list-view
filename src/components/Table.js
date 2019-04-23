import React, { Component } from 'react';

class Table extends Component {

  render() {

    return (
        <div className="">
            <table className="slds-table slds-table_cell-buffer slds-table_bordered">
            <thead>
              <tr className="slds-line-height_reset">
                <th className="" scope="col">
                  <div className="slds-truncate" title="Opportunity Name">Opportunity Name</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Account Name">Account Name</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Close Date">Close Date</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Stage">Stage</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Confidence">Confidence</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Amount">Amount</div>
                </th>
                <th className="" scope="col">
                  <div className="slds-truncate" title="Contact">Contact</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="slds-hint-parent">
                <th data-label="Opportunity Name" scope="row">
                  <div className="slds-truncate" title="Cloudhub"><a href="javascript:void(0);" tabindex="-1">Cloudhub</a></div>
                </th>
                <td data-label="Account Name">
                  <div className="slds-truncate" title="Cloudhub">Cloudhub</div>
                </td>
                <td data-label="Close Date">
                  <div className="slds-truncate" title="4/14/2015">4/14/2015</div>
                </td>
                <td data-label="Prospecting">
                  <div className="slds-truncate" title="Prospecting">Prospecting</div>
                </td>
                <td data-label="Confidence">
                  <div className="slds-truncate" title="20%">20%</div>
                </td>
                <td data-label="Amount">
                  <div className="slds-truncate" title="$25k">$25k</div>
                </td>
                <td data-label="Contact">
                  <div className="slds-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);" tabindex="-1">jrogers@cloudhub.com</a></div>
                </td>
              </tr>
              <tr className="slds-hint-parent">
                <th data-label="Opportunity Name" scope="row">
                  <div className="slds-truncate" title="Cloudhub + Anypoint Connectors"><a href="javascript:void(0);" tabindex="-1">Cloudhub + Anypoint Connectors</a></div>
                </th>
                <td data-label="Account Name">
                  <div className="slds-truncate" title="Cloudhub">Cloudhub</div>
                </td>
                <td data-label="Close Date">
                  <div className="slds-truncate" title="4/14/2015">4/14/2015</div>
                </td>
                <td data-label="Prospecting">
                  <div className="slds-truncate" title="Prospecting">Prospecting</div>
                </td>
                <td data-label="Confidence">
                  <div className="slds-truncate" title="20%">20%</div>
                </td>
                <td data-label="Amount">
                  <div className="slds-truncate" title="$25k">$25k</div>
                </td>
                <td data-label="Contact">
                  <div className="slds-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);" tabindex="-1">jrogers@cloudhub.com</a></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default Table;
