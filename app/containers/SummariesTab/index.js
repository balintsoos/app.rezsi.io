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

import Notification from 'components/Notification';
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

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.summaries)}

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

SummariesTab.propTypes = {
  fetch: PropTypes.func.isRequired,
  // create: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  // createDialog: PropTypes.bool.isRequired,
  // openDialog: PropTypes.func.isRequired,
  // closeDialog: PropTypes.func.isRequired,
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
