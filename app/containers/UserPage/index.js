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

import Header from 'containers/Header';
import ReportsTab from 'containers/ReportsTab';
import BillsTab from 'containers/BillsTab';

import { makeSelectUser } from 'containers/Auth/selectors';

import messages from './messages';

export class UserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  match = () => ({
    params: {
      groupId: this.props.user.group.id,
      userId: this.props.user.id,
    },
  })

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.user.group.name}</title>
        </Helmet>

        <Header
          title={this.props.user.group.name}
        />

        <Tabs>
          <Tab label={<FormattedMessage {...messages.reports} />}>
            <ReportsTab match={this.match()} />
          </Tab>
          <Tab label={<FormattedMessage {...messages.bills} />}>
            <BillsTab match={this.match()} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(UserPage);
