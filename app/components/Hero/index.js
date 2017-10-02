import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import background from './background.jpg';

const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Hero = ({ children }) => (
  <Image>
    {children}
  </Image>
);

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
