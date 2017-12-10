/* eslint-disable space-infix-ops */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';

const ContentLayout = ({ children }) => (
  <Box width={[1, 5/6, 4/6, 3/6]} m={'auto'}>
    {children}
  </Box>
);

ContentLayout.propTypes = {
  children: PropTypes.node,
};

export default ContentLayout;
