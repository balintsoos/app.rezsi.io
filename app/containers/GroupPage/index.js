/**
 *
 * GroupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGroupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class GroupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>GroupPage</title>
          <meta name="description" content="Description of GroupPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

GroupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  grouppage: makeSelectGroupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'groupPage', reducer });
const withSaga = injectSaga({ key: 'groupPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupPage);
