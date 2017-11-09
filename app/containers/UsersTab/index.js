/**
 *
 * UsersTab
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
import InviteIcon from 'material-ui/svg-icons/social/person-add';

import Subheader from 'components/Subheader';
import UserList from 'components/UserList';
import InviteDialog from 'components/InviteDialog';
import DeleteUserDialog from 'components/DeleteUserDialog';
import Notification from 'components/Notification';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  fetchRequest,
  deleteUser,
  openDialog,
  closeDialog,
} from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUsers,
  makeSelectDialog,
} from './selectors';

export class UsersTab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { user: {} };
  }

  componentDidMount() {
    if (!this.props.loading && this.props.match.params.id) {
      this.props.fetch(this.props.match.params.id);
    }
  }

  onSelectUser = ({ id }) => {
    const groupId = this.props.match.params.id;

    this.props.redirect(`/groups/${groupId}/users/${id}`);
  }

  onDeleteUser = (user) => {
    this.setState({ user });
    this.props.openDialog('deleteDialog');
  }

  deleteUser = ({ id: userId }) => {
    const groupId = this.props.match.params.id;

    this.props.deleteUser({ groupId, userId });
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  inviteUrl = () => {
    const origin = window.location.origin;
    const id = this.props.match.params.id;

    return `${origin}/signup?invite=${id}`;
  }

  InviteButton = (primary = false) => (
    <RaisedButton
      primary={primary}
      icon={<InviteIcon />}
      label={<FormattedMessage {...messages.invite} />}
      onClick={() => this.props.openDialog('inviteDialog')}
    />
  )

  UserListPlaceholder = () => (
    <div>
      <p><FormattedMessage {...messages.empty} /></p>

      {this.InviteButton()}
    </div>
  )

  render() {
    return (
      <div>
        <Subheader title={''}>
          {this.InviteButton(true)}
        </Subheader>

        <UserList
          users={this.props.users}
          select={this.onSelectUser}
          delete={this.onDeleteUser}
          placeholder={this.UserListPlaceholder()}
        />

        <InviteDialog
          open={this.props.inviteDialog}
          ok={() => this.props.closeDialog('inviteDialog')}
          url={this.inviteUrl()}
        />

        <DeleteUserDialog
          user={this.state.user}
          open={this.props.deleteDialog}
          cancel={() => this.props.closeDialog('deleteDialog')}
          submit={this.deleteUser}
        />

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

UsersTab.propTypes = {
  fetch: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  inviteDialog: PropTypes.bool.isRequired,
  deleteDialog: PropTypes.bool.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  users: makeSelectUsers(),
  inviteDialog: makeSelectDialog('inviteDialog'),
  deleteDialog: makeSelectDialog('deleteDialog'),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (id) => dispatch(fetchRequest(id)),
    deleteUser: (id) => dispatch(deleteUser(id)),
    openDialog: (dialog) => dispatch(openDialog(dialog)),
    closeDialog: (dialog) => dispatch(closeDialog(dialog)),
    redirect: (to) => dispatch(push(to)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usersTab', reducer });
const withSaga = injectSaga({ key: 'usersTab', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersTab);
