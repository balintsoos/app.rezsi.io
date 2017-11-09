/**
*
* SummaryList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import SummaryListItem from 'components/SummaryListItem';
import ListPlaceholder from 'components/ListPlaceholder';

function SummaryList(props) {
  if (!props.summaries.length && props.placeholder) {
    return (
      <ListPlaceholder>
        {props.placeholder}
      </ListPlaceholder>
    );
  }

  return (
    <div>
      {props.summaries.map((summary) => (
        <SummaryListItem
          key={summary.id}
          {...summary}
        />
      ))}
    </div>
  );
}

SummaryList.propTypes = {
  summaries: PropTypes.array.isRequired,
  placeholder: PropTypes.node,
};

export default SummaryList;
