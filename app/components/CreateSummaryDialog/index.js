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
import DatePicker from 'material-ui/DatePicker';

import CubicMeter from 'components/CubicMeter';

import messages from './messages';

const initialState = () => ({
  from: '',
  to: '',
  currency: '',
  hotWaterPrice: null,
  coldWaterPrice: null,
  heatPrice: null,
});

class CreateSummaryDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

  onDateChanged = (key, date) => {
    this.setState({ [key]: date });
  }

  actions = () => [
    <FlatButton
      label={<FormattedMessage {...messages.cancel} />}
      onClick={this.props.cancel}
    />,
    <RaisedButton
      primary
      label={<FormattedMessage {...messages.submit} />}
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
        <DatePicker
          autoOk
          fullWidth
          okLabel={<FormattedMessage {...messages.ok} />}
          cancelLabel={<FormattedMessage {...messages.cancel} />}
          floatingLabelText={<FormattedMessage {...messages.fromHint} />}
          errorText={this.errorMessage('from')}
          onChange={(event, date) => this.onDateChanged('from', date)}
        />

        <DatePicker
          autoOk
          fullWidth
          okLabel={<FormattedMessage {...messages.ok} />}
          cancelLabel={<FormattedMessage {...messages.cancel} />}
          floatingLabelText={<FormattedMessage {...messages.toHint} />}
          errorText={this.errorMessage('to')}
          onChange={(event, date) => this.onDateChanged('to', date)}
        />

        <TextField
          fullWidth
          name="currency"
          type="text"
          floatingLabelText={<FormattedMessage {...messages.currencyLabel} />}
          hintText={<FormattedMessage {...messages.currencyHint} />}
          errorText={this.errorMessage('currency')}
          onChange={this.onFieldChanged}
        />

        <TextField
          fullWidth
          name="hotWaterPrice"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.hotWaterPriceLabel} />}
          hintText={<FormattedMessage {...messages.hotWaterPriceHint} values={{ cubicMeter: <CubicMeter /> }} />}
          errorText={this.errorMessage('hotWaterPrice')}
          onChange={this.onFieldChanged}
        />

        <TextField
          fullWidth
          name="coldWaterPrice"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.coldWaterPriceLabel} />}
          hintText={<FormattedMessage {...messages.coldWaterPriceHint} values={{ cubicMeter: <CubicMeter /> }} />}
          errorText={this.errorMessage('coldWaterPrice')}
          onChange={this.onFieldChanged}
        />

        <TextField
          fullWidth
          name="heatPrice"
          type="number"
          floatingLabelText={<FormattedMessage {...messages.heatPriceLabel} />}
          hintText={<FormattedMessage {...messages.heatPriceHint} />}
          errorText={this.errorMessage('heatPrice')}
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
  errors: PropTypes.object,
};

export default CreateSummaryDialog;
