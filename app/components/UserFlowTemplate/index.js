/* eslint-disable space-infix-ops */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import Logo from 'components/Logo';

const UserFlowTemplate = ({ children }) => (
  <Flex justify={'center'}>
    <Box width={[1, 2/3, 1/2, 1/4]} py={2}>
      <Logo />
      {children}
    </Box>
  </Flex>
);

UserFlowTemplate.propTypes = {
  children: PropTypes.node,
};

export default UserFlowTemplate;
