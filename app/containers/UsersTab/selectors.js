import { createSelector } from 'reselect';

/**
 * Direct selector to the usersTab state domain
 */
const selectUsersTabDomain = (state) => state.get('usersTab');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectUsersTabDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectUsersTabDomain,
  (pageState) => pageState.get('error')
);

const makeSelectUsers = () => createSelector(
  selectUsersTabDomain,
  (pageState) => pageState.get('users').toJS()
);


/**
 * Default selector used by UsersTab
 */

const makeSelectUsersTab = () => createSelector(
  selectUsersTabDomain,
  (substate) => substate.toJS()
);

export default makeSelectUsersTab;
export {
  selectUsersTabDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsers,
};
