/**
 *
 * GroupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import InviteIcon from 'material-ui/svg-icons/social/person-add';

import Header from 'containers/Header';
import Subheader from 'components/Subheader';
import Notification from 'components/Notification';
import InviteDialog from 'components/InviteDialog';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchRequest } from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectGroup,
} from './selectors';

export class GroupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { inviteDialog: false };
  }

  componentDidMount() {
    if (!this.props.loading && this.props.match.params.id) {
      this.props.fetch(this.props.match.params.id);
    }
  }

  openInviteDialog = () => {
    this.setState({ inviteDialog: true });
  }

  closeInviteDialog = () => {
    this.setState({ inviteDialog: false });
  }

  errorMessage = () => {
    if (!messages[this.props.error]) {
      return this.props.error;
    }

    return <FormattedMessage {...messages[this.props.error]} />;
  }

  inviteUrl = () => {
    const origin = window.location.origin;
    const id = this.props.group.id;

    return `${origin}/signup?invite=${id}`;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.group.name}</title>
        </Helmet>

        <Header />

        <Subheader
          title={this.props.group.name}
          back={this.props.backToGroups}
        >
          <RaisedButton
            primary
            icon={<InviteIcon />}
            label={<FormattedMessage {...messages.invite} />}
            onClick={this.openInviteDialog}
          />
        </Subheader>

        <InviteDialog
          open={this.state.inviteDialog}
          ok={this.closeInviteDialog}
          url={this.inviteUrl()}
        />

        <Notification
          watcher={this.props.error}
          message={this.errorMessage()}
        />
      </div>
    );
  }
}

GroupPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  backToGroups: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  group: makeSelectGroup(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: (id) => dispatch(fetchRequest(id)),
    backToGroups: () => dispatch(push('/groups')),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'groupPage', reducer });
const withSaga = injectSaga({ key: 'groupPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupPage);
