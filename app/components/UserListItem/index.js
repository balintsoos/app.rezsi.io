/**
*
* UserListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import Gravatar from 'components/Gravatar';

import messages from './messages';

function UserListItem(props) {
  const options = (
    <IconMenu
      iconButtonElement={<IconButton touch><MoreVertIcon /></IconButton>}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        primaryText={<FormattedMessage {...messages.delete} />}
        leftIcon={<DeleteIcon />}
        onClick={props.delete}
      />
    </IconMenu>
  );

  return (
    <div>
      <ListItem
        leftAvatar={<Gravatar email={props.email} />}
        primaryText={props.displayName}
        onClick={props.select ? props.select : null}
        disabled={!props.select}
        rightIconButton={props.delete ? options : null}
      />
      <Divider inset />
    </div>
  );
}

UserListItem.propTypes = {
  email: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  select: PropTypes.func,
  delete: PropTypes.func,
};

export default UserListItem;
