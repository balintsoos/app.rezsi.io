/**
 *
 * GroupsPage
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

import Header from 'containers/Header';
import Head from 'components/Head';
import Subheader from 'components/Subheader';
import CreateGroupDialog from 'components/CreateGroupDialog';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectGroups,
  makeSelectDialog,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchRequest,
  createRequest,
  openDialog,
  closeDialog,
} from './actions';

export class GroupsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetch();
    }
  }

  GroupList() {
    return (
      <ul>
        {this.props.groups.map((group) => <li key={group.name}>{group.name}</li>)}
      </ul>
    );
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
        <Head title={messages.title} />

        <Header />

        <Subheader title={<FormattedMessage {...messages.title} />}>
          <RaisedButton
            primary
            icon={<AddIcon />}
            label={<FormattedMessage {...messages.create} />}
            onClick={this.props.openCreateDialog}
          />
        </Subheader>

        {this.GroupList()}

        <CreateGroupDialog
          open={this.props.createDialog}
          cancel={this.props.closeCreateDialog}
          submit={this.props.create}
        />

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

GroupsPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  createDialog: PropTypes.bool.isRequired,
  openCreateDialog: PropTypes.func.isRequired,
  closeCreateDialog: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  groups: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  createDialog: makeSelectDialog('createDialog'),
  groups: makeSelectGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchRequest()),
    create: (group) => dispatch(createRequest(group)),
    openCreateDialog: () => dispatch(openDialog('createDialog')),
    closeCreateDialog: () => dispatch(closeDialog('createDialog')),
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
