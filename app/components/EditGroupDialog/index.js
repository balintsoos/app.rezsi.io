/**
*
* EditGroupDialog
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import messages from './messages';

class EditGroupDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { name: '' };
  }

  componentWillReceiveProps({ group }) {
    this.setState(group);
  }

  onFieldChanged = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });
  }

  actions = () => [
    <FlatButton
      label={<FormattedMessage {...messages.cancel} />}
      onClick={this.props.cancel}
    />,
    <RaisedButton
      label={<FormattedMessage {...messages.submit} />}
      primary
      onClick={() => this.props.submit(this.state)}
    />,
  ]

  errorMessage = (field) => {
    if (!this.props.errors || !this.props.errors[field]) {
      return null;
    }

    const error = this.props.errors[field];

    if (!messages[error.message]) {
      return error.message;
    }

    return <FormattedMessage {...messages[error.message]} />;
  }

  render() {
    return (
      <Dialog
        title={<h1><FormattedMessage {...messages.title} /></h1>}
        actions={this.actions()}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.cancel}
      >
        <TextField
          fullWidth
          name="name"
          type="text"
          floatingLabelText={<FormattedMessage {...messages.label} />}
          hintText={<FormattedMessage {...messages.placeholder} />}
          errorText={this.errorMessage('name')}
          value={this.state.name}
          onChange={this.onFieldChanged}
        />
      </Dialog>
    );
  }
}

EditGroupDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  group: PropTypes.object,
  errors: PropTypes.object,
};

export default EditGroupDialog;
