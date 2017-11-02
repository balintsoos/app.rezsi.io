/**
*
* CreateReportDialog
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

class CreateReportDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      heat: null,
      hotWater: null,
      coldWater: null,
    };
  }

  onFieldChanged = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });
  }

  actions() {
    return [
      <FlatButton
        label={<FormattedMessage {...messages.cancel} />}
        onClick={this.props.cancel}
      />,
      <RaisedButton
        label={<FormattedMessage {...messages.submit} />}
        primary
        onClick={() => this.props.submit(this.state)}
      />,
    ];
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
          name="heat"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.heat} />}
          onChange={this.onFieldChanged}
        />
        <TextField
          fullWidth
          name="hotWater"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.hotWater} />}
          onChange={this.onFieldChanged}
        />
        <TextField
          fullWidth
          name="coldWater"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.coldWater} />}
          onChange={this.onFieldChanged}
        />
      </Dialog>
    );
  }
}

CreateReportDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default CreateReportDialog;
