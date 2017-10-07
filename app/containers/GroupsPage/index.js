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

import { makeSelectLoading, makeSelectError, makeSelectGroups } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchRequest } from './actions';

export class GroupsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { createDialog: false };
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetch();
    }
  }

  openCreateDialog = () => {
    this.setState({ createDialog: true });
  }

  closeCreateDialog = () => {
    this.setState({ createDialog: false });
  }

  submitCreateDialog = () => {
    // TODO
  }

  groupList() {
    return (
      <ul>
        {this.props.groups.map((group) => <li>{group.name}</li>)}
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
            onClick={this.openCreateDialog}
          />
        </Subheader>

        <CreateGroupDialog
          open={this.state.createDialog}
          submit={this.submitCreateDialog}
          cancel={this.closeCreateDialog}
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  groups: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  groups: makeSelectGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchRequest()),
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
