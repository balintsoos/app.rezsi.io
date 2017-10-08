/**
*
* GroupListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { grey400 } from 'material-ui/styles/colors';
import OpenIcon from 'material-ui/svg-icons/action/exit-to-app';
import Divider from 'material-ui/Divider';

import messages from './messages';

const OpenButton = (open) => (
  <IconButton
    touch
    tooltip={<FormattedMessage {...messages.open} />}
    tooltipPosition="bottom-left"
    onClick={open}
  >
    <OpenIcon color={grey400} />
  </IconButton>
);

function GroupListItem(props) {
  const select = () => props.select(props.id);

  return (
    <div>
      <ListItem
        leftAvatar={<Avatar>{props.name[0].toUpperCase()}</Avatar>}
        primaryText={props.name}
        rightIconButton={props.select ? OpenButton(select) : null}
        onClick={props.select ? select : null}
        disabled={!props.select}
      />
      <Divider inset />
    </div>
  );
}

GroupListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  select: PropTypes.func,
};

export default GroupListItem;
