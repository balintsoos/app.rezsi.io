/**
 *
 * GroupsPage
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
import makeSelectGroupsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class GroupsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>GroupsPage</title>
          <meta name="description" content="Description of GroupsPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

GroupsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  groupspage: makeSelectGroupsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'groupsPage', reducer });
const withSaga = injectSaga({ key: 'groupsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupsPage);
