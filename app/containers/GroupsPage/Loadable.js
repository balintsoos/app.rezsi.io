/**
 *
 * Asynchronously loads the component for GroupsPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
