import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Auth HOCs
import {
  isNotLoggedIn,
  isLoggedInGroupLeader,
  isLoggedInGroupMember,
} from 'containers/Auth/controllers';

// Pages
import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import GroupsPage from 'containers/GroupsPage/Loadable';
import GroupPage from 'containers/GroupPage/Loadable';
import GroupMemberPage from 'containers/GroupMemberPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={isNotLoggedIn(HomePage)} />
      <Route exact path="/signup" component={isNotLoggedIn(SignUpPage)} />
      <Route exact path="/login" component={isNotLoggedIn(LoginPage)} />

      <Route exact path="/groups" component={isLoggedInGroupLeader(GroupsPage)} />
      <Route exact path="/groups/:id" component={isLoggedInGroupLeader(GroupPage)} />
      <Route exact path="/groups/:groupId/users/:userId" component={isLoggedInGroupLeader(GroupMemberPage)} />

      <Route exact path="/user" component={isLoggedInGroupMember(GroupMemberPage)} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
