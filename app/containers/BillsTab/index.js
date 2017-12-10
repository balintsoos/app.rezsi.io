/**
 *
 * BillsTab
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import BillList from 'components/BillList';
import ContentLayout from 'components/ContentLayout';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchRequest,
  download,
} from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectBills,
} from './selectors';

export class BillsTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      const { groupId, userId } = this.props.match.params;

      this.props.fetch(groupId, userId);
    }
  }

  onDownload = (bill) => {
    const { groupId, userId } = this.props.match.params;

    this.props.download(groupId, userId, bill.id);
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  BillListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>
    </div>
  )

  render() {
    return (
      <div>
        <ContentLayout>
          <BillList
            bills={this.props.bills}
            placeholder={this.BillListPlaceholder()}
            download={this.onDownload}
          />
        </ContentLayout>

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

BillsTab.propTypes = {
  fetch: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  bills: PropTypes.array.isRequired,
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
  bills: makeSelectBills(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (groupId, userId) => dispatch(fetchRequest(groupId, userId)),
    download: (groupId, userId, billId) => dispatch(download(groupId, userId, billId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'billsTab', reducer });
const withSaga = injectSaga({ key: 'billsTab', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BillsTab);
