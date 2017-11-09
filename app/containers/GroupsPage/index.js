/**
 *
 * GroupsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import Header from 'containers/Header';
import Head from 'components/Head';
import Subheader from 'components/Subheader';
import GroupList from 'components/GroupList';
import CreateGroupDialog from 'components/CreateGroupDialog';
import EditGroupDialog from 'components/EditGroupDialog';
import DeleteGroupDialog from 'components/DeleteGroupDialog';
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
  editRequest,
  deleteRequest,
  openDialog,
  closeDialog,
} from './actions';

export class GroupsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { group: {} };
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetch();
    }
  }

  onSelectGroup = ({ id }) => {
    this.props.redirect(`/groups/${id}`);
  }

  onEditGroup = (group) => {
    this.setState({ group });
    this.props.openDialog('editDialog');
  }

  onDeleteGroup = (group) => {
    this.setState({ group });
    this.props.openDialog('deleteDialog');
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  GroupListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>

      <RaisedButton
        icon={<AddIcon />}
        label={<FormattedMessage {...messages.create} />}
        onClick={() => this.props.openDialog('createDialog')}
      />
    </div>
  )

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
            onClick={() => this.props.openDialog('createDialog')}
          />
        </Subheader>

        <GroupList
          groups={this.props.groups}
          select={this.onSelectGroup}
          edit={this.onEditGroup}
          delete={this.onDeleteGroup}
          placeholder={this.GroupListPlaceholder()}
        />

        <CreateGroupDialog
          open={this.props.createDialog}
          cancel={() => this.props.closeDialog('createDialog')}
          submit={this.props.create}
        />

        <EditGroupDialog
          group={this.state.group}
          open={this.props.editDialog}
          cancel={() => this.props.closeDialog('editDialog')}
          submit={this.props.edit}
        />

        <DeleteGroupDialog
          group={this.state.group}
          open={this.props.deleteDialog}
          cancel={() => this.props.closeDialog('deleteDialog')}
          submit={this.props.delete}
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
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  createDialog: PropTypes.bool.isRequired,
  editDialog: PropTypes.bool.isRequired,
  deleteDialog: PropTypes.bool.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  createDialog: makeSelectDialog('createDialog'),
  editDialog: makeSelectDialog('editDialog'),
  deleteDialog: makeSelectDialog('deleteDialog'),
  groups: makeSelectGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchRequest()),
    create: (group) => dispatch(createRequest(group)),
    edit: (group) => dispatch(editRequest(group)),
    delete: (group) => dispatch(deleteRequest(group)),
    openDialog: (dialog) => dispatch(openDialog(dialog)),
    closeDialog: (dialog) => dispatch(closeDialog(dialog)),
    redirect: (to) => dispatch(push(to)),
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
