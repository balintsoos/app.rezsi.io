/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Router from './router';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s | rezsi.io"
        defaultTitle="rezsi.io"
      >
      </Helmet>

      <Router />
    </div>
  );
}
