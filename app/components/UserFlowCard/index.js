/* eslint-disable space-infix-ops */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Card } from 'material-ui/Card';

import Logo from 'components/Logo';

export const UserFlowTemplate = ({ children }) => (
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

const UserFlowCard = ({ children }) => (
  <UserFlowTemplate>
    <Card>
      {children}
    </Card>
  </UserFlowTemplate>
);

UserFlowCard.propTypes = {
  children: PropTypes.node,
};

export default UserFlowCard;
