/**
*
* Head
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';

function Head({ intl, title }) {
  return (
    <Helmet>
      <title>{intl.formatMessage(title)}</title>
    </Helmet>
  );
}

Head.propTypes = {
  intl: intlShape.isRequired,
  title: PropTypes.object.isRequired,
};

export default injectIntl(Head);
