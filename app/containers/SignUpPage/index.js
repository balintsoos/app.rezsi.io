/**
 *
 * SignUpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import Head from 'components/Head';
import UserFlowCard from 'components/UserFlowCard';
import UserFlowNavigation from 'components/UserFlowNavigation';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signUpRequest } from './actions';
import LegalNotice from './components/LegalNotice';

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

        <UserFlowCard>
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

          <LegalNotice>
            <FormattedMessage {...messages.legal} />
          </LegalNotice>

          <CardActions>
            <RaisedButton
              primary
              fullWidth
              label={<FormattedMessage {...messages.title} />}
              onClick={this.onSubmit}
            />
          </CardActions>

          <Divider />

          <UserFlowNavigation>
            <FlatButton
              disabled
              label={<FormattedMessage {...messages.alreadySignedUp} />}
              containerElement={<Link to="/login" />}
            />
            <FlatButton
              primary
              label={<FormattedMessage {...messages.login} />}
              containerElement={<Link to="/login" />}
            />
          </UserFlowNavigation>
        </UserFlowCard>

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
