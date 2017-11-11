/*
 *
 * SummariesTab reducer
 *
 */

import { fromJS, List, Map } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  summaries: [],
  createDialog: false,
});

function summariesTabReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('summaries', List(action.summaries));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case CREATE:
      return state
        .set('loading', true)
        .set('error', '');

    case CREATE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('createDialog', false)
        .update('summaries', (summaries) => summaries.unshift(Map(action.summary)));

    case CREATE_ERROR:
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

export default summariesTabReducer;
