import { createSelector } from 'reselect';

/**
 * Direct selector to the userPage state domain
 */
const selectUserPageDomain = (state) => state.get('userPage');

/**
 * Other specific selectors
 */


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
};
