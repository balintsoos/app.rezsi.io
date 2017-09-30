/**
*
* Notification
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

class Notification extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { open: false };
  }

  componentWillReceiveProps({ watcher }) {
    if (watcher && !this.props.watcher) {
      this.open();
    }
  }

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message={this.props.message}
        autoHideDuration={4000}
        onRequestClose={this.close}
      />
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  watcher: PropTypes.any.isRequired,
};

export default Notification;
