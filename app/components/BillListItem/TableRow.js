import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import {
  TableRow as MuiTableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { grey500 as unitColor } from 'material-ui/styles/colors';

import messages from './messages';

const Unit = styled.span`
  color: ${unitColor};
`;

const TableRow = (props) => (
  <MuiTableRow key={props.item}>
    <TableRowColumn>
      <FormattedMessage {...messages[props.item]} />
    </TableRowColumn>

    <TableRowColumn>
      {props.consumption} <Unit>{props.unit}</Unit>
    </TableRowColumn>

    <TableRowColumn>
      {props.price} <Unit>{props.currency}/{props.unit}</Unit>
    </TableRowColumn>

    <TableRowColumn>
      {props.consumption * props.price} <Unit>{props.currency}</Unit>
    </TableRowColumn>
  </MuiTableRow>
);

TableRow.propTypes = {
  item: PropTypes.string.isRequired,
  consumption: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.any,
  currency: PropTypes.any,
};

export default TableRow;
