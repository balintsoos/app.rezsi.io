/**
*
* InviteDialog
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import messages from './messages';

function InviteDialog(props) {
  const actions = [
    <FlatButton
      label={<FormattedMessage {...messages.ok} />}
      onClick={props.ok}
    />,
  ];

  return (
    <Dialog
      title={<h1><FormattedMessage {...messages.title} /></h1>}
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={props.ok}
    >
      <FormattedMessage {...messages.instructions} />
      <TextField
        fullWidth
        name="link"
        type="text"
        value={props.url}
      />
    </Dialog>
  );
}

InviteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  ok: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default InviteDialog;
