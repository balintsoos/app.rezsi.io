/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';

import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  UNAUTHENTICATE,
} from './constants';

const initialState = fromJS({
  authenticated: null,
  user: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state
        .set('authenticated', true)
        .set('user', action.user);

    case AUTH_ERROR:
      return state
        .set('authenticated', false)
        .set('user', null);

    case UNAUTHENTICATE:
      return state
        .set('authenticated', false)
        .set('user', null);

    default:
      return state;
  }
}

export default authReducer;
