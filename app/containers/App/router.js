import React from 'react';
import { Switch, Route } from 'react-router-dom';

import withAuth from 'containers/Auth';
import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import GroupsPage from 'containers/GroupsPage/Loadable';
import GroupPage from 'containers/GroupPage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={withAuth(HomePage, { authenticated: '/groups' })} />
      <Route exact path="/signup" component={withAuth(SignUpPage, { authenticated: '/groups' })} />
      <Route exact path="/login" component={withAuth(LoginPage, { authenticated: '/groups' })} />

      <Route exact path="/groups" component={withAuth(GroupsPage, { unauthenticated: '/login' })} />
      <Route exact path="/groups/:id" component={withAuth(GroupPage, { unauthenticated: '/login' })} />

      <Route exact path="/users/:id" component={withAuth(UserPage, { unauthenticated: '/login' })} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
