import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */
const makeSelectAuthenticated = () => createSelector(
  selectAuthDomain,
  (pageState) => pageState.get('authenticated')
);

const makeSelectUser = () => createSelector(
  selectAuthDomain,
  (pageState) => pageState.get('user')
);

/**
 * Default selector used by Auth
 */

const makeSelectAuth = () => createSelector(
  selectAuthDomain,
  (substate) => substate.toJS()
);

export default makeSelectAuth;
export {
  selectAuthDomain,
  makeSelectAuthenticated,
  makeSelectUser,
};
