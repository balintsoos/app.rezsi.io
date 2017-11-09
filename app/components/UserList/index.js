/**
*
* UserList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'material-ui/List';

import UserListItem from 'components/UserListItem';
import ListPlaceholder from 'components/ListPlaceholder';

function UserList(props) {
  if (!props.users.length && props.placeholder) {
    return (
      <ListPlaceholder>
        {props.placeholder}
      </ListPlaceholder>
    );
  }

  return (
    <List>
      {props.users.map((user) => (
        <UserListItem
          key={user.id}
          select={() => props.select(user)}
          delete={() => props.delete(user)}
          {...user}
        />
      ))}
    </List>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  placeholder: PropTypes.node,
};

export default UserList;
