/*
 *
 * Auth actions
 *
 */

import {
  AUTHENTICATE,
  AUTH_SUCCESS,
  AUTH_FAIL,
  UNAUTHENTICATE,
  LOGOUT,
} from './constants';

export function authenticate() {
  return {
    type: AUTHENTICATE,
  };
}

export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user,
  };
}

export function authFail() {
  return {
    type: AUTH_FAIL,
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
