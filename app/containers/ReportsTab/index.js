/**
 *
 * ReportsTab
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ReportList from 'components/ReportList';
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
  makeSelectReports,
} from './selectors';

export class ReportsTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      const { groupId = '', userId = '' } = this.props.match.params;

      this.props.fetch(groupId, userId);
    }
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  ReportListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>
    </div>
  )

  render() {
    return (
      <div>
        <ReportList
          reports={this.props.reports}
          placeholder={this.ReportListPlaceholder()}
        />

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

ReportsTab.propTypes = {
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  reports: PropTypes.array.isRequired,
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
  reports: makeSelectReports(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (groupId, userId) => dispatch(fetchRequest(groupId, userId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'reportsTab', reducer });
const withSaga = injectSaga({ key: 'reportsTab', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReportsTab);
