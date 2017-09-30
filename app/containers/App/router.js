import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={HomePage} />
      <Route exact path="/login" component={HomePage} />

      <Route path="/groups" component={HomePage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
