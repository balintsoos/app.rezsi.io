/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LogoutIcon from 'material-ui/svg-icons/action/power-settings-new';

import { makeSelectUser } from 'containers/Auth/selectors';
import { unauthenticate } from 'containers/Auth/actions';
import Gravatar from 'components/Gravatar';
import messages from './messages';

function Header(props) {
  return (
    <Paper zDepth={1}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={'rezsi.io'} />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <Gravatar email={props.user.email} />

          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <ExpandMoreIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem
              primaryText={<FormattedMessage {...messages.settings} />}
              leftIcon={<SettingsIcon />}
              onClick={() => props.redirect('/settings')}
            />
            <Divider />
            <MenuItem
              primaryText={<FormattedMessage {...messages.logout} />}
              leftIcon={<LogoutIcon />}
              onClick={props.logout}
            />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(unauthenticate()),
    redirect: (to) => dispatch(push(to)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Header);
