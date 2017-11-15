/**
*
* Notifications
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import IconMenu from 'material-ui/IconMenu';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';

import messages from './messages';

class Notifications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.socket = new WebSocket(`ws://localhost:4040/?id=${this.props.id}`);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const payload = Array.isArray(data) ? data : [data];

      this.setState({
        notifications: this.state.notifications.concat(payload),
      });
    };
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={this.props.iconButton}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Subheader><FormattedMessage {...messages.title} /></Subheader>

        {!this.state.notifications.length ? (
          <ListItem
            disabled
            primaryText={<FormattedMessage {...messages.empty} />}
          />
        ) : null}

        {this.state.notifications.map((msg) => (
          <ListItem
            key={msg.id}
            primaryText={msg.id}
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
