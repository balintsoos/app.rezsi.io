/**
 *
 * SignUpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Head from 'components/Head';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signUpRequest } from './actions';

export class SignUpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      email: '',
      displayName: '',
      password: '',
    };
  }

  onFieldChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.props.loading) {
      this.props.signUp(this.state);
    }
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  render() {
    return (
      <div>
        <Head title={messages.title} />

        <Card>
          <CardTitle title={<FormattedMessage {...messages.title} />} />

          <CardText>
            <TextField
              fullWidth
              name="email"
              type="email"
              floatingLabelText={<FormattedMessage {...messages.email} />}
              onChange={this.onFieldChanged}
            />
            <TextField
              fullWidth
              name="displayName"
              type="text"
              floatingLabelText={<FormattedMessage {...messages.displayName} />}
              onChange={this.onFieldChanged}
            />
            <TextField
              fullWidth
              name="password"
              type="password"
              floatingLabelText={<FormattedMessage {...messages.password} />}
              onChange={this.onFieldChanged}
            />
          </CardText>

          <CardActions>
            <RaisedButton
              primary
              label={<FormattedMessage {...messages.title} />}
              onClick={this.onSubmit}
            />
          </CardActions>
        </Card>

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  signUp: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    signUp: (props) => dispatch(signUpRequest(props)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpPage', reducer });
const withSaga = injectSaga({ key: 'signUpPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
