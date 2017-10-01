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

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import Head from 'components/Head';
import UserFlowCard from 'components/UserFlowCard';

import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Head title={messages.title} />

        <UserFlowCard>
          <CardText>
            <RaisedButton
              primary
              label={<FormattedMessage {...messages.signUp} />}
              containerElement={<Link to="/signup" />}
            />

            <RaisedButton
              label={<FormattedMessage {...messages.login} />}
              containerElement={<Link to="/login" />}
            />
          </CardText>
        </UserFlowCard>
      </div>
    );
  }
}
