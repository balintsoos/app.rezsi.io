import { createSelector } from 'reselect';

/**
 * Direct selector to the billsTab state domain
 */
const selectBillsTabDomain = (state) => state.get('billsTab');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectBillsTabDomain,
  (pageState) => pageState.get('loading')
);

const makeSelectError = () => createSelector(
  selectBillsTabDomain,
  (pageState) => pageState.get('error')
);

const makeSelectBills = () => createSelector(
  selectBillsTabDomain,
  (pageState) => pageState.get('bills').toJS()
);

/**
 * Default selector used by BillsTab
 */

const makeSelectBillsTab = () => createSelector(
  selectBillsTabDomain,
  (substate) => substate.toJS()
);

export default makeSelectBillsTab;
export {
  selectBillsTabDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectBills,
};
