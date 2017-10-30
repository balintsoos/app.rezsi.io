import { createSelector } from 'reselect';

/**
 * Direct selector to the groupMemberPage state domain
 */
const selectGroupMemberPageDomain = (state) => state.get('groupMemberPage');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectGroupMemberPageDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGroupMemberPageDomain,
  (pageState) => pageState.get('error')
);

const makeSelectUser = () => createSelector(
  selectGroupMemberPageDomain,
  (pageState) => pageState.get('user').toJS()
);


/**
 * Default selector used by GroupMemberPage
 */

const makeSelectGroupMemberPage = () => createSelector(
  selectGroupMemberPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectGroupMemberPage;
export {
  selectGroupMemberPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectUser,
};
