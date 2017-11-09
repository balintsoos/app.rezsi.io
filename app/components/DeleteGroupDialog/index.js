/**
*
* DeleteGroupDialog
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import messages from './messages';

class DeleteGroupDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  actions = () => [
    <FlatButton
      label={<FormattedMessage {...messages.cancel} />}
      onClick={this.props.cancel}
    />,
    <RaisedButton
      label={<FormattedMessage {...messages.submit} />}
      primary
      onClick={() => this.props.submit(this.props.group)}
    />,
  ]

  render() {
    return (
      <Dialog
        title={<h1><FormattedMessage {...messages.title} /></h1>}
        actions={this.actions()}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.cancel}
      >
        <FormattedMessage
          {...messages.question}
          values={{ group: this.props.group.name }}
        />
      </Dialog>
    );
  }
}

DeleteGroupDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  group: PropTypes.object,
};

export default DeleteGroupDialog;
