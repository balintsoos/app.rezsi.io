/*
 *
 * GroupPage reducer
 *
 */

import { fromJS, Map } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  group: {
    id: '',
    name: '',
  },
});

function groupPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('group', Map(action.group));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default groupPageReducer;
