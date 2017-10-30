/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import { grey600 as IconColor } from 'material-ui/styles/colors';

import Gravatar from 'components/Gravatar';

import messages from './messages';

const ToolbarGravatar = styled(Gravatar)`
  margin-right: 16px;
`;

function Subheader(props) {
  return (
    <Paper zDepth={1}>
      <Toolbar>
        <ToolbarGroup firstChild={!!props.back}>
          {props.back ? (
            <IconButton
              touch
              tooltip={<FormattedMessage {...messages.back} />}
              tooltipPosition={'top-right'}
              onClick={props.back}
            >
              <BackIcon color={IconColor} />
            </IconButton>
          ) : null}

          {props.gravatar ? (
            <ToolbarGravatar email={props.gravatar} />
          ) : null}

          <ToolbarTitle text={props.title} />
        </ToolbarGroup>

        <ToolbarGroup lastChild>
          {props.children}
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  );
}

Subheader.propTypes = {
  title: PropTypes.node.isRequired,
  gravatar: PropTypes.string,
  back: PropTypes.func,
  children: PropTypes.node,
};

export default Subheader;
