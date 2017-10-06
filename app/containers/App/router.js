import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Auth from 'containers/Auth/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />

      <Auth>
        <Switch>
          <Route path="/groups" component={HomePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Auth>
    </Switch>
  );
}
