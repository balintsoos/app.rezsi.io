/**
 *
 * GroupMemberPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import Header from 'containers/Header';
import ReportsTab from 'containers/ReportsTab';
import BillsTab from 'containers/BillsTab';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchRequest } from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUser,
} from './selectors';

export class GroupMemberPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      const { groupId = '', userId = '' } = this.props.match.params;

      this.props.fetch(groupId, userId);
    }
  }

  backToGroup = () => {
    const { groupId } = this.props.match.params;

    this.props.backToGroup(groupId);
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
        <Helmet>
          <title>{this.props.user.displayName}</title>
        </Helmet>

        <Header
          title={this.props.user.displayName}
          gravatar={this.props.user.email}
          back={this.backToGroup}
        />

        <Tabs>
          <Tab label={<FormattedMessage {...messages.reports} />}>
            <ReportsTab {...this.props} />
          </Tab>
          <Tab label={<FormattedMessage {...messages.bills} />}>
            <BillsTab {...this.props} />
          </Tab>
        </Tabs>

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

GroupMemberPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  backToGroup: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      groupId: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (groupId, userId) => dispatch(fetchRequest(groupId, userId)),
    backToGroup: (groupId) => dispatch(push(`/groups/${groupId}`)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'groupMemberPage', reducer });
const withSaga = injectSaga({ key: 'groupMemberPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupMemberPage);
