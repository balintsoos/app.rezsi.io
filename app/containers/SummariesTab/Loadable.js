/**
 *
 * Asynchronously loads the component for SummariesTab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
