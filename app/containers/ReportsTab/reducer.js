/*
 *
 * ReportsTab reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  reports: [],
});

function reportsTabReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('reports', List(action.reports));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default reportsTabReducer;
