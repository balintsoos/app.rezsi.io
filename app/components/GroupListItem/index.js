/**
*
* GroupListItem
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
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { grey600 as IconColor } from 'material-ui/styles/colors';

import messages from './messages';

function GroupListItem(props) {
  const optionsButton = (
    <IconButton touch>
      <MoreVertIcon color={IconColor} />
    </IconButton>
  );

  const options = (
    <IconMenu
      iconButtonElement={optionsButton}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        primaryText={<FormattedMessage {...messages.edit} />}
        leftIcon={<EditIcon />}
        onClick={props.edit}
      />
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
        leftAvatar={<Avatar>{props.name[0].toUpperCase()}</Avatar>}
        primaryText={props.name}
        rightIconButton={options}
        onClick={props.select ? props.select : null}
        disabled={!props.select}
      />
      <Divider inset />
    </div>
  );
}

GroupListItem.propTypes = {
  name: PropTypes.string.isRequired,
  select: PropTypes.func,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};

export default GroupListItem;
