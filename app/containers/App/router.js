import React from 'react';
import { Switch, Route } from 'react-router-dom';

import withAuth from 'containers/Auth';
import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={withAuth(HomePage, { authenticated: '/dashboard' })} />
      <Route exact path="/signup" component={withAuth(SignUpPage, { authenticated: '/dashboard' })} />
      <Route exact path="/login" component={withAuth(LoginPage, { authenticated: '/dashboard' })} />

      <Route exact path="/groups" component={withAuth(HomePage, { unauthenticated: '/login' })} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
