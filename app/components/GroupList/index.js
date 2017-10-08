/**
*
* GroupList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { List } from 'material-ui/List';

import GroupListItem from 'components/GroupListItem';

import messages from './messages';

function GroupList(props) {
  if (!props.groups.length) {
    return <FormattedMessage {...messages.empty} />;
  }

  return (
    <List>
      {props.groups.map((group) => (
        <GroupListItem key={group.id} select={props.select} {...group} />
      ))}
    </List>
  );
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
  select: PropTypes.func,
};

export default GroupList;
