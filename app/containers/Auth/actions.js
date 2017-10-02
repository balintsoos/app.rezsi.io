/*
 *
 * Auth actions
 *
 */

import {
  AUTHENTICATE,
  AUTH_SUCCESS,
  AUTH_ERROR,
  UNAUTHENTICATE,
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

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error,
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
  };
}
