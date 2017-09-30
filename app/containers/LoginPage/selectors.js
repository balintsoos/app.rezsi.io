import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
 selectLoginPageDomain,
 (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
 selectLoginPageDomain,
 (pageState) => pageState.get('error')
);

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectLoading,
  makeSelectError,
};
