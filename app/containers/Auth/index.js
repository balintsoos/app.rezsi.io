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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { exist as tokenExist } from 'utils/token';

import { makeSelectAuthenticated } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authenticate } from './actions';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (tokenExist() && this.props.authenticated === null) {
      this.props.authenticate();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated === this.props.authenticated) {
      return;
    }

    if (nextProps.authenticated === false && nextProps.options.unauthenticated) {
      return this.props.redirect(nextProps.options.unauthenticated);
    }

    if (nextProps.authenticated === true && nextProps.options.authenticated) {
      return this.props.redirect(nextProps.options.authenticated);
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
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
  return () => (
    <AuthComponent options={options}>
      <Component />
    </AuthComponent>
  );
}
