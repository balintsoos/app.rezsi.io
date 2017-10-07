/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

function Subheader(props) {
  return (
    <Paper zDepth={1}>
      <Toolbar>
        <ToolbarGroup>
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
  children: PropTypes.node,
};

export default Subheader;
