import { createSelector } from 'reselect';

/**
 * Direct selector to the groupsPage state domain
 */
const selectGroupsPageDomain = (state) => state.get('groupsPage');

/**
 * Other specific selectors
 */


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
};
