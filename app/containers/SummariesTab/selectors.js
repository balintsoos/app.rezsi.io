import { createSelector } from 'reselect';

/**
 * Direct selector to the summariesTab state domain
 */
const selectSummariesTabDomain = (state) => state.get('summariesTab');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectSummariesTabDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSummariesTabDomain,
  (pageState) => pageState.get('error')
);

const makeSelectSummaries = () => createSelector(
  selectSummariesTabDomain,
  (pageState) => pageState.get('summaries').toJS()
);

const makeSelectDialog = (dialog) => createSelector(
  selectSummariesTabDomain,
  (pageState) => pageState.get(dialog)
);

/**
 * Default selector used by SummariesTab
 */

const makeSelectSummariesTab = () => createSelector(
  selectSummariesTabDomain,
  (substate) => substate.toJS()
);

export default makeSelectSummariesTab;
export {
  selectSummariesTabDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectSummaries,
  makeSelectDialog,
};
