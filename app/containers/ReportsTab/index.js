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

import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import ReportList from 'components/ReportList';
import CreateReportDialog from 'components/CreateReportDialog';
import Subheader from 'components/Subheader';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectUser } from 'containers/Auth/selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchRequest,
  createRequest,
  openDialog,
  closeDialog,
} from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectReports,
  makeSelectDialog,
} from './selectors';

export class ReportsTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      const { groupId, userId } = this.props.match.params;

      this.props.fetch(groupId, userId);
    }
  }

  onCreate = (report) => {
    const { groupId, userId } = this.props.match.params;

    this.props.create(groupId, userId, report);
  }

  isMember = () => this.props.user.role === 'MEMBER'

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  CreateButton = (primary = false) => (
    <RaisedButton
      primary={primary}
      icon={<AddIcon />}
      label={<FormattedMessage {...messages.create} />}
      onClick={() => this.props.openDialog('createDialog')}
    />
  )

  ReportListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>

      {this.isMember() ? this.CreateButton() : null}
    </div>
  )

  render() {
    return (
      <div>
        {this.isMember() ? (
          <Subheader title={''}>
            {this.CreateButton(true)}
          </Subheader>
        ) : null}

        <ReportList
          reports={this.props.reports}
          placeholder={this.ReportListPlaceholder()}
        />

        <CreateReportDialog
          open={this.props.createDialog}
          cancel={() => this.props.closeDialog('createDialog')}
          submit={this.onCreate}
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
  create: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  createDialog: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  reports: PropTypes.array.isRequired,
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }),
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
  createDialog: makeSelectDialog('createDialog'),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (groupId, userId) => dispatch(fetchRequest(groupId, userId)),
    create: (groupId, userId, report) => dispatch(createRequest(groupId, userId, report)),
    openDialog: (dialog) => dispatch(openDialog(dialog)),
    closeDialog: (dialog) => dispatch(closeDialog(dialog)),
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
