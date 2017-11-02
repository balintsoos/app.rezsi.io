import React from 'react';

import Auth from 'containers/Auth';

export function AuthComponent(Component, controller) {
  return (props) => (
    <Auth controller={controller} {...props}>
      <Component {...props} />
    </Auth>
  );
}

export function isLoggedInGroupLeader(Component) {
  return AuthComponent(Component, (isAuthenticated, user, redirect) => {
    if (isAuthenticated && user.role === 'LEADER') {
      return;
    }

    redirect('/login');
  });
}

export function isLoggedInGroupMember(Component) {
  return AuthComponent(Component, (isAuthenticated, user, redirect) => {
    if (isAuthenticated && user.role === 'MEMBER') {
      return;
    }

    redirect('/login');
  });
}

export function isNotLoggedIn(Component) {
  return AuthComponent(Component, (isAuthenticated, user, redirect) => {
    if (!isAuthenticated) {
      return;
    }

    if (user.role === 'LEADER') {
      return redirect('/groups'); // eslint-disable-line consistent-return
    }

    if (user.role === 'MEMBER') {
      return redirect('/user'); // eslint-disable-line consistent-return
    }
  });
}
