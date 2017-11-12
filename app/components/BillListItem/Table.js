import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Table as MuiTable,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow as MuiTableRow,
  TableRowColumn,
  TableHeaderColumn,
} from 'material-ui/Table';

import TableRow from './TableRow';

import messages from './messages';

const Table = (props) => (
  <MuiTable selectable={false}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <MuiTableRow>
        <TableHeaderColumn colSpan="4">
          {props.header}
        </TableHeaderColumn>
      </MuiTableRow>
      <MuiTableRow>
        <TableHeaderColumn>
          <FormattedMessage {...messages.item} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.quantity} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.unitPrice} />
        </TableHeaderColumn>
        <TableHeaderColumn>
          <FormattedMessage {...messages.amount} />
        </TableHeaderColumn>
      </MuiTableRow>
    </TableHeader>

    <TableBody displayRowCheckbox={false}>
      {props.data.map((row) => (
        <TableRow key={row.item} {...row} />
      ))}
    </TableBody>

    <TableFooter
      adjustForCheckbox={false}
    >
      <MuiTableRow>
        <TableRowColumn colSpan="4" style={{ textAlign: 'right' }}>
          {props.footer}
        </TableRowColumn>
      </MuiTableRow>
    </TableFooter>
  </MuiTable>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Table;
