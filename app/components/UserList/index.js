/**
*
* UserList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { List } from 'material-ui/List';

import UserListItem from 'components/UserListItem';

import messages from './messages';

function UserList(props) {
  if (!props.users.length) {
    return <FormattedMessage {...messages.empty} />;
  }

  return (
    <List>
      {props.users.map((user) => (
        <UserListItem key={user.id} select={props.select} {...user} />
      ))}
    </List>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  select: PropTypes.func,
};

export default UserList;
