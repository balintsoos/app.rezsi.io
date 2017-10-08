import { createSelector } from 'reselect';

/**
 * Direct selector to the groupPage state domain
 */
const selectGroupPageDomain = (state) => state.get('groupPage');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectGroupPageDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGroupPageDomain,
  (pageState) => pageState.get('error')
);

const makeSelectGroup = () => createSelector(
  selectGroupPageDomain,
  (pageState) => pageState.get('group').toJS()
);

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
  makeSelectLoading,
  makeSelectError,
  makeSelectGroup,
};
