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
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import LogoutIcon from 'material-ui/svg-icons/action/power-settings-new';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import BellIcon from 'material-ui/svg-icons/social/notifications';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Notifications from 'components/Notifications';
import { makeSelectUser } from 'containers/Auth/selectors';
import { logout } from 'containers/Auth/actions';
import Gravatar from 'components/Gravatar';
import messages from './messages';

const ToolbarGravatar = styled.div`
  margin-right: 16px;
`;

function Header(props) {
  const textColor = props.muiTheme.palette.alternateTextColor;

  return (
    <Paper zDepth={1}>
      <Toolbar style={{ backgroundColor: props.muiTheme.palette.primary1Color }}>
        <ToolbarGroup firstChild={!!props.back}>
          {props.back ? (
            <IconButton touch onClick={props.back}>
              <BackIcon color={textColor} />
            </IconButton>
          ) : null}

          {props.gravatar ? (
            <ToolbarGravatar>
              <Gravatar email={props.gravatar} />
            </ToolbarGravatar>
          ) : null}

          <ToolbarTitle
            text={props.title || <FormattedMessage {...messages.title} />}
            style={{ color: textColor }}
          />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <Notifications
            id={props.user.id}
            redirect={props.redirect}
            iconButton={(
              <IconButton touch iconStyle={{ color: textColor }}>
                <BellIcon />
              </IconButton>
            )}
          />

          <Gravatar email={props.user.email} />

          <IconMenu
            iconButtonElement={
              <IconButton touch iconStyle={{ color: textColor }}>
                <ExpandMoreIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <ListItem
              disabled
              primaryText={props.user.displayName}
              secondaryText={props.user.email}
              leftAvatar={<Gravatar email={props.user.email} />}
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
  title: PropTypes.node,
  back: PropTypes.func,
  gravatar: PropTypes.string,
  redirect: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
};


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    redirect: (to) => dispatch(push(to)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  muiThemeable(),
  withConnect,
)(Header);
