/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

/* eslint-disable space-infix-ops */
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Flex } from 'grid-styled';
import RaisedButton from 'material-ui/RaisedButton';

import Head from 'components/Head';
import Hero from 'components/Hero';
import Logo from 'components/Logo';

import messages from './messages';

const Panel = styled(Flex)`
  height: 100vh;
`;

const Motto = styled.div`
  font-size: 40px;
  font-weight: 300;
  margin: 32px;
  text-align: center;
`;

const Navigation = styled.div`
  text-align: center;
`;

const NavButton = styled(RaisedButton)`
  margin: 10px;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Head title={messages.title} />

        <Flex wrap>
          <Panel width={[1, 1, 1/2]} order={[2, 2, 1]}>
            <Hero />
          </Panel>
          <Panel width={[1, 1, 1/2]} order={[1, 1, 2]} column justify={'center'}>
            <Logo />

            <Motto>
              <FormattedMessage {...messages.motto} />
            </Motto>

            <Navigation>
              <NavButton
                primary
                label={<FormattedMessage {...messages.signUp} />}
                containerElement={<Link to="/signup" />}
              />

              <NavButton
                label={<FormattedMessage {...messages.login} />}
                containerElement={<Link to="/login" />}
              />
            </Navigation>
          </Panel>
        </Flex>
      </div>
    );
  }
}
