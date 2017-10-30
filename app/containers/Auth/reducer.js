/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';

import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  UNAUTHENTICATE,
} from './constants';

const initialState = fromJS({
  authenticated: null,
  user: {},
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state
        .set('authenticated', true)
        .update('user', (user) => user.merge(action.user));

    case AUTH_FAIL:
      return state
        .set('authenticated', false)
        .update('user', (user) => user.clear());

    case UNAUTHENTICATE:
      return state
        .set('authenticated', false)
        .update('user', (user) => user.clear());

    default:
      return state;
  }
}

export default authReducer;
