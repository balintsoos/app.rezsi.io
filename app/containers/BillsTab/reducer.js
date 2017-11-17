/*
 *
 * BillsTab reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DOWNLOAD,
  DOWNLOAD_SUCCESS,
  DOWNLOAD_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  bills: [],
});

function billsTabReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('bills', List(action.bills));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case DOWNLOAD:
      return state
        .set('loading', true)
        .set('error', '');

    case DOWNLOAD_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '');

    case DOWNLOAD_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default billsTabReducer;
