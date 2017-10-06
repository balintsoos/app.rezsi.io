/**
 *
 * Auth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectAuthenticated } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authenticate } from './actions';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if (this.props.authenticated === null) {
      this.props.authenticate();
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
  authenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => dispatch(authenticate()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Auth);
