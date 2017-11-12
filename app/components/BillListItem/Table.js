import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Table as MuiTable,
  TableHeader,
  TableBody,
  TableRow as MuiTableRow,
  TableHeaderColumn,
} from 'material-ui/Table';

import TableRow from './TableRow';

import messages from './messages';

const Header = (
  <TableHeader
    displaySelectAll={false}
    adjustForCheckbox={false}
  >
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
);

const Table = (props) => (
  <MuiTable selectable={false}>
    {Header}

    <TableBody displayRowCheckbox={false}>
      {props.data.map((row) => (
        <TableRow key={row.item} {...row} />
      ))}
    </TableBody>
  </MuiTable>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
