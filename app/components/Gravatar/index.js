import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

export const url = ({ email, size = 100, placeholder = 'retro' }) => {
  const hash = md5(email);

  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${placeholder}`;
};

const Gravatar = ({ email, size, placeholder, ...rest }) => (
  <Paper circle zDepth={1}>
    <Avatar src={url({ email, size, placeholder })} {...rest} />
  </Paper>
);

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
  size: PropTypes.number,
  placeholder: PropTypes.string,
};

export default Gravatar;
