/**
*
* CreateSummaryDialog
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

class CreateSummaryDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
    };
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
          name="from"
          type="text"
          floatingLabelText={<FormattedMessage {...messages.fromLabel} />}
          hintText={<FormattedMessage {...messages.fromHint} />}
          onChange={this.onFieldChanged}
        />
      </Dialog>
    );
  }
}

CreateSummaryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default CreateSummaryDialog;
