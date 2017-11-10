/**
*
* BillList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import BillListItem from 'components/BillListItem';
import ListPlaceholder from 'components/ListPlaceholder';

function BillList(props) {
  if (!props.bills.length && props.placeholder) {
    return (
      <ListPlaceholder>
        {props.placeholder}
      </ListPlaceholder>
    );
  }

  return (
    <div>
      {props.bills.map((bill) => (
        <BillListItem
          key={bill.id}
          {...bill}
        />
      ))}
    </div>
  );
}

BillList.propTypes = {
  bills: PropTypes.array.isRequired,
  placeholder: PropTypes.node,
};

export default BillList;
