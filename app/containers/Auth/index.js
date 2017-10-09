/**
 *
 * Auth
 *
 */

/* eslint-disable consistent-return */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ProgressBar from 'components/ProgressBar';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { exist as tokenExist } from 'utils/token';

import { makeSelectAuthenticated } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authenticate, unauthenticate } from './actions';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!tokenExist()) {
      return this.props.unauthenticate();
    }

    this.authFlow(this.props.authenticated);
  }

  componentWillReceiveProps(nextProps) {
    this.authFlow(nextProps.authenticated);
  }

  authFlow(authenticated) {
    if (authenticated === null) {
      return this.props.authenticate();
    }

    if (authenticated === false && this.props.options.unauthenticated) {
      return this.props.redirect(this.props.options.unauthenticated);
    }

    if (authenticated === true && this.props.options.authenticated) {
      return this.props.redirect(this.props.options.authenticated);
    }
  }

  render() {
    if (this.props.authenticated === null) {
      return <ProgressBar />;
    }

    return this.props.children;
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
  unauthenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  options: PropTypes.shape({
    authenticated: PropTypes.string,
    unauthenticated: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => dispatch(authenticate()),
    unauthenticate: () => dispatch(unauthenticate()),
    redirect: (endpoint) => dispatch(push(endpoint)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export const AuthComponent = compose(
  withReducer,
  withSaga,
  withConnect,
)(Auth);

export default function withAuth(Component, options) {
  return (props) => (
    <AuthComponent options={options} {...props}>
      <Component {...props} />
    </AuthComponent>
  );
}
