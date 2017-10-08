/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Emoticon from 'material-ui/svg-icons/social/sentiment-dissatisfied';

import Head from 'components/Head';
import { UserFlowTemplate } from 'components/UserFlowCard';

import messages from './messages';

const H1 = styled.h1`
  text-align: center;
  font-size: 8em;
  font-weight: 300;
  margin: 12px 0 0;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 0;
`;

const Smiley = styled(Emoticon)`
  width: 120px !important;
  height: 120px !important;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Head title={messages.title} />

        <UserFlowTemplate>
          <H1>
            <FormattedMessage {...messages.status} values={{ icon: <Smiley /> }} />
          </H1>

          <H2>
            <FormattedMessage {...messages.subtitle} />
          </H2>
        </UserFlowTemplate>
      </div>
    );
  }
}
