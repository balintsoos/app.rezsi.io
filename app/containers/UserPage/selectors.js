import { createSelector } from 'reselect';

/**
 * Direct selector to the userPage state domain
 */
const selectUserPageDomain = (state) => state.get('userPage');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectUserPageDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectUserPageDomain,
  (pageState) => pageState.get('error')
);

const makeSelectReports = () => createSelector(
  selectUserPageDomain,
  (pageState) => pageState.get('reports').toJS()
);

const makeSelectCreateReportDialog = () => createSelector(
  selectUserPageDomain,
  (pageState) => pageState.get('createReportDialog')
);

/**
 * Default selector used by UserPage
 */

const makeSelectUserPage = () => createSelector(
  selectUserPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserPage;
export {
  selectUserPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectReports,
  makeSelectCreateReportDialog,
};
