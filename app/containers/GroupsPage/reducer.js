/*
 *
 * GroupsPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  groups: [],
});

function groupsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('groups', action.groups);

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default groupsPageReducer;
