/**
 *
 * LoginPage
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
import Divider from 'material-ui/Divider';

import Head from 'components/Head';
import UserFlowTemplate from 'components/UserFlowTemplate';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loginRequest } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  onFieldChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.props.loading) {
      this.props.login(this.state);
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

        <UserFlowTemplate>
          <Card>
            <CardTitle
              title={<FormattedMessage {...messages.title} />}
              subtitle={<FormattedMessage {...messages.subtitle} />}
            />

            <Divider />

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
                name="password"
                type="password"
                floatingLabelText={<FormattedMessage {...messages.password} />}
                onChange={this.onFieldChanged}
              />
            </CardText>

            <CardActions>
              <RaisedButton
                primary
                fullWidth
                label={<FormattedMessage {...messages.title} />}
                onClick={this.onSubmit}
              />
            </CardActions>
          </Card>
        </UserFlowTemplate>

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (props) => dispatch(loginRequest(props)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
