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
  LOGOUT,
} from './constants';

const initialState = fromJS({
  authenticated: null,
  user: {
    id: '',
    displayName: '',
    email: '',
    role: '',
    group: '',
  },
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
        .set('user', initialState.get('user'));

    case UNAUTHENTICATE:
    case LOGOUT:
      return state
        .set('authenticated', false)
        .set('user', initialState.get('user'));

    default:
      return state;
  }
}

export default authReducer;
