import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'grid-styled';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Text = styled(Link)`
  font-size: 40px;
  font-weight: 300;
  color: ${(props) => props.color};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.hover}
  }
`;

const Logo = (props) => (
  <Flex justify={'center'}>
    <Text
      to={'/'}
      color={props.muiTheme.palette.primary1Color}
      hover={props.muiTheme.palette.accent4Color}
    >
      {'rezsi.io'}
    </Text>
  </Flex>
);

Logo.propTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default muiThemeable()(Logo);
