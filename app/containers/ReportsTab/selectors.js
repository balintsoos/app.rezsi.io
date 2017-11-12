import { createSelector } from 'reselect';

/**
 * Direct selector to the reportsTab state domain
 */
const selectReportsTabDomain = (state) => state.get('reportsTab');

/**
 * Other specific selectors
*/
const makeSelectLoading = () => createSelector(
  selectReportsTabDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectReportsTabDomain,
  (pageState) => pageState.get('error')
);

const makeSelectReports = () => createSelector(
  selectReportsTabDomain,
  (pageState) => pageState.get('reports').toJS()
);

const makeSelectDialog = (dialog) => createSelector(
  selectReportsTabDomain,
  (pageState) => pageState.get(dialog)
);

/**
 * Default selector used by ReportsTab
 */

const makeSelectReportsTab = () => createSelector(
  selectReportsTabDomain,
  (substate) => substate.toJS()
);

export default makeSelectReportsTab;
export {
  selectReportsTabDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectReports,
  makeSelectDialog,
};
