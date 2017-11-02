/*
 *
 * UserPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE_REPORT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  createReportDialog: false,
  user: {
    group: '',
  },
});

function userPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .update('user', (user) => user.merge(action.user));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case CREATE_REPORT:
      return state
        .set('loading', true)
        .set('error', '');

    case CREATE_REPORT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('createReportDialog', false)
        .updateIn(['user', 'consumptionReports'], (reports) => reports.unshift(Map(action.report)));

    case CREATE_REPORT_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case OPEN_DIALOG:
      return state
        .set(action.dialog, true);

    case CLOSE_DIALOG:
      return state
        .set(action.dialog, false);

    default:
      return state;
  }
}

export default userPageReducer;
