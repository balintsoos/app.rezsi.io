import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from 'grid-styled';
import { cyan500 } from 'material-ui/styles/colors';

const Text = styled(Link)`
  font-size: 40px;
  font-weight: 300;
  color: ${cyan500};
  text-decoration: none;
`;

const Logo = () => (
  <Flex justify={'center'}>
    <Text to={'/'}>
      {'rezsi.io'}
    </Text>
  </Flex>
);

export default Logo;
