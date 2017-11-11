import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'grid-styled';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Text = muiThemeable()(styled(({ muiTheme, ...rest }) => <Link {...rest} />)`
  font-size: 40px;
  font-weight: 300;
  color: ${(props) => props.muiTheme.palette.primary1Color};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.muiTheme.palette.accent4Color};
  }
`);

const Logo = () => (
  <Flex justify={'center'}>
    <Text to={'/'}>
      {'rezsi.io'}
    </Text>
  </Flex>
);

export default Logo;
