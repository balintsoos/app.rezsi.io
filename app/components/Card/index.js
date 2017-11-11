import React from 'react';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { Card as MuiCard } from 'material-ui/Card';

const Card = styled(({ muiTheme, ...rest }) => <MuiCard {...rest} />)`
  margin-left: ${(props) => props.muiTheme.spacing.desktopGutter}px;
  margin-right: ${(props) => props.muiTheme.spacing.desktopGutter}px;
  margin-top: ${(props) => props.muiTheme.spacing.desktopGutterLess}px;
  margin-bottom: ${(props) => props.muiTheme.spacing.desktopGutterLess}px;
`;

export default muiThemeable()(Card);
