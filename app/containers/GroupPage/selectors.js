import { createSelector } from 'reselect';

/**
 * Direct selector to the groupPage state domain
 */
const selectGroupPageDomain = (state) => state.get('groupPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GroupPage
 */

const makeSelectGroupPage = () => createSelector(
  selectGroupPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectGroupPage;
export {
  selectGroupPageDomain,
};
