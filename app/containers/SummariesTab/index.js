/**
 *
 * SummariesTab
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

import Subheader from 'components/Subheader';
import ContentLayout from 'components/ContentLayout';
import Notification from 'components/Notification';
import SummaryList from 'components/SummaryList';
import CreateSummaryDialog from 'components/CreateSummaryDialog';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchRequest,
  createRequest,
  openDialog,
  closeDialog,
  download,
} from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectSummaries,
  makeSelectDialog,
} from './selectors';

export class SummariesTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading && this.props.match.params.id) {
      this.props.fetch(this.props.match.params.id);
    }
  }

  onCreateSummary = (summary) => {
    const id = this.props.match.params.id;

    this.props.create(id, summary);
  }

  onDownload = (summary) => {
    const { id } = this.props.match.params;

    this.props.download(id, summary.id);
  }

  errors = () => {
    if (!this.props.error.response || !this.props.error.response.errors) {
      return null;
    }

    return this.props.error.response.errors;
  }

  errorMessage = () => {
    if (this.errors()) {
      return false;
    }

    if (!messages[this.props.error.message]) {
      return this.props.error.message;
    }

    return <FormattedMessage {...messages[this.props.error.message]} />;
  }

  AddButton = (primary = false) => (
    <RaisedButton
      primary={primary}
      icon={<AddIcon />}
      label={<FormattedMessage {...messages.create} />}
      onClick={() => this.props.openDialog('createDialog')}
    />
  )

  SummaryListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>

      {this.AddButton()}
    </div>
  )

  render() {
    return (
      <div>
        <Subheader title={''}>
          {this.AddButton(true)}
        </Subheader>

        {!this.props.loading ? (
          <ContentLayout>
            <SummaryList
              summaries={this.props.summaries}
              placeholder={this.SummaryListPlaceholder()}
              download={this.onDownload}
            />
          </ContentLayout>
        ) : null}

        <CreateSummaryDialog
          open={this.props.createDialog}
          cancel={() => this.props.closeDialog('createDialog')}
          submit={this.onCreateSummary}
          errors={this.errors()}
        />

        <Notification
          watcher={this.errorMessage()}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

SummariesTab.propTypes = {
  fetch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  createDialog: PropTypes.bool.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  summaries: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  summaries: makeSelectSummaries(),
  createDialog: makeSelectDialog('createDialog'),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (id) => dispatch(fetchRequest(id)),
    create: (id, summary) => dispatch(createRequest(id, summary)),
    download: (id, summaryId) => dispatch(download(id, summaryId)),
    openDialog: (dialog) => dispatch(openDialog(dialog)),
    closeDialog: (dialog) => dispatch(closeDialog(dialog)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'summariesTab', reducer });
const withSaga = injectSaga({ key: 'summariesTab', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummariesTab);
