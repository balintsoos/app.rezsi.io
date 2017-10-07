import { createSelector } from 'reselect';

/**
 * Direct selector to the groupsPage state domain
 */
const selectGroupsPageDomain = (state) => state.get('groupsPage');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectGroupsPageDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGroupsPageDomain,
  (pageState) => pageState.get('error')
);

const makeSelectGroups = () => createSelector(
  selectGroupsPageDomain,
  (pageState) => pageState.get('groups')
);

/**
 * Default selector used by GroupsPage
 */

const makeSelectGroupsPage = () => createSelector(
  selectGroupsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectGroupsPage;
export {
  selectGroupsPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectGroups,
};
