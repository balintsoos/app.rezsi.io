/**
*
* Notifications
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Badge from 'material-ui/Badge';
import IconMenu from 'material-ui/IconMenu';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import { red500 as badgeColor } from 'material-ui/styles/colors';

import API from 'utils/API';

import messages from './messages';

const styles = {
  badge: {
    top: 20,
    right: 20,
    backgroundColor: badgeColor,
    color: 'white',
  },
};

class Notifications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.socket = new WebSocket(`${API.utils.wssUrl}/?id=${this.props.id}`);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const payload = Array.isArray(data) ? data : [data];

      this.setState({
        notifications: [...payload, ...this.state.notifications],
      });
    };
  }

  onChange = (open, reason) => {
    console.log(open, reason);

    if (!open) {
      // this.onClose();
    }
  }

  onClose = () => {
    this.setState({
      notifications: [],
    });

    this.socket.send();
  }

  isEmpty = () => !this.count()

  count = () => this.state.notifications.length

  Badge = () => {
    if (this.isEmpty()) {
      return this.props.iconButton;
    }

    return (
      <Badge
        badgeContent={this.count()}
        badgeStyle={styles.badge}
      >
        {this.props.iconButton}
      </Badge>
    );
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={this.Badge()}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        onRequestChange={this.onChange}
      >
        <Subheader>
          <FormattedMessage {...messages.title} />
        </Subheader>

        {this.isEmpty() ? (
          <ListItem
            disabled
            primaryText={<FormattedMessage {...messages.empty} />}
          />
        ) : null}

        {this.state.notifications.map((msg) => (
          <ListItem
            key={msg.id}
            primaryText={msg.type}
            secondaryText={msg.createdAt}
          />
        ))}
      </IconMenu>
    );
  }
}

Notifications.propTypes = {
  id: PropTypes.string.isRequired,
  iconButton: PropTypes.node.isRequired,
};

export default Notifications;
