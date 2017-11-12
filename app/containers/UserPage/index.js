/**
 *
 * UserPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import Header from 'containers/Header';
import ReportsTab from 'containers/ReportsTab';
import BillsTab from 'containers/BillsTab';
import Subheader from 'components/Subheader';
import Notification from 'components/Notification';
import CreateReportDialog from 'components/CreateReportDialog';
import ReportList from 'components/ReportList';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectUser } from 'containers/Auth/selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectReports,
  makeSelectCreateReportDialog,
} from './selectors';
import {
  fetchRequest,
  createReportRequest,
  openDialog,
  closeDialog,
} from './actions';

export class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetch();
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
        <Helmet>
          <title>{this.props.user.group}</title>
        </Helmet>

        <Header
          title={this.props.user.group}
        />

        <Tabs>
          <Tab label={<FormattedMessage {...messages.reports} />}>
            <ReportsTab {...this.props} />
          </Tab>
          <Tab label={<FormattedMessage {...messages.bills} />}>
            <BillsTab {...this.props} />
          </Tab>
        </Tabs>

        <Subheader title={''}>
          <RaisedButton
            primary
            icon={<AddIcon />}
            label={<FormattedMessage {...messages.createReport} />}
            onClick={() => this.props.openDialog('createReportDialog')}
          />
        </Subheader>

        <ReportList reports={this.props.reports} />

        <CreateReportDialog
          open={this.props.createReportDialog}
          cancel={() => this.props.closeDialog('createReportDialog')}
          submit={this.props.createReport}
        />

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

UserPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  reports: PropTypes.array.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  createReport: PropTypes.func.isRequired,
  createReportDialog: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  user: makeSelectUser(),
  reports: makeSelectReports(),
  createReportDialog: makeSelectCreateReportDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchRequest()),
    openDialog: (dialog) => dispatch(openDialog(dialog)),
    closeDialog: (dialog) => dispatch(closeDialog(dialog)),
    createReport: (report) => dispatch(createReportRequest(report)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userPage', reducer });
const withSaga = injectSaga({ key: 'userPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserPage);
