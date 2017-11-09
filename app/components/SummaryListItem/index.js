/**
*
* SummaryListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Card, CardText } from 'material-ui/Card';

import messages from './messages';

function SummaryListItem(props) {
  return (
    <Card>
      <CardText>
        <FormattedMessage {...messages.from} />{props.from}

        <FormattedMessage {...messages.to} />{props.to}
      </CardText>
    </Card>
  );
}

SummaryListItem.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SummaryListItem;
