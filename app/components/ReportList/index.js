/**
*
* ReportList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import format from 'date-fns/format';

import { grey500 as unitColor } from 'material-ui/styles/colors';

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from 'material-ui/Table';

import ListPlaceholder from 'components/ListPlaceholder';

import messages from './messages';

const Unit = styled.span`
  color: ${unitColor};
`;

class ReportList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  TableHeader = () => (
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn colSpan="4">
          <FormattedMessage {...messages.header} />
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>
          <FormattedMessage {...messages.createdAt} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.hotWater} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.coldWater} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.heat} />
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
  )

  TableBody = (reports) => (
    <TableBody displayRowCheckbox={false}>
      {reports.map((report) => (
        <TableRow key={report.id}>
          {this.TableRowColumn(format(report.createdAt, 'YYYY MMM D'))}
          {this.TableRowColumn(report.hotWater, (<span>m<sup>3</sup></span>))}
          {this.TableRowColumn(report.coldWater, (<span>m<sup>3</sup></span>))}
          {this.TableRowColumn(report.heat, 'kWh')}
        </TableRow>
      ))}
    </TableBody>
  )

  TableRowColumn = (label, unit) => (
    <TableRowColumn>
      {label}{unit ? (<Unit> {unit}</Unit>) : null}
    </TableRowColumn>
  )

  render() {
    if (!this.props.reports.length && this.props.placeholder) {
      return (
        <ListPlaceholder>
          {this.props.placeholder}
        </ListPlaceholder>
      );
    }

    return (
      <Table selectable={false}>
        {this.TableHeader()}
        {this.TableBody(this.props.reports)}
      </Table>
    );
  }
}

ReportList.propTypes = {
  reports: PropTypes.array.isRequired,
  placeholder: PropTypes.node,
};

export default ReportList;
