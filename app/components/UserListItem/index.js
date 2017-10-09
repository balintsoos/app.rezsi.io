/**
*
* UserListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Gravatar from 'components/Gravatar';

function UserListItem(props) {
  const select = () => props.select(props.id);

  return (
    <div>
      <ListItem
        leftAvatar={<Gravatar email={props.email} />}
        primaryText={props.displayName}
        onClick={props.select ? select : null}
        disabled={!props.select}
      />
      <Divider inset />
    </div>
  );
}

UserListItem.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  select: PropTypes.func,
};

export default UserListItem;
