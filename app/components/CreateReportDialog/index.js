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

import CubicMeter from 'components/CubicMeter';

import messages from './messages';

const initialState = () => ({
  heat: null,
  hotWater: null,
  coldWater: null,
});

class CreateReportDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = initialState();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open === false && nextProps.open === true) {
      this.setState(initialState());
    }
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
        autoScrollBodyContent
      >
        <TextField
          fullWidth
          name="heat"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.heat} />}
          errorText={this.errorMessage('heat')}
          onChange={this.onFieldChanged}
        />
        <TextField
          fullWidth
          name="hotWater"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.hotWater} values={{ cubicMeter: <CubicMeter /> }} />}
          errorText={this.errorMessage('hotWater')}
          onChange={this.onFieldChanged}
        />
        <TextField
          fullWidth
          name="coldWater"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.coldWater} values={{ cubicMeter: <CubicMeter /> }} />}
          errorText={this.errorMessage('coldWater')}
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
  errors: PropTypes.object,
};

export default CreateReportDialog;
