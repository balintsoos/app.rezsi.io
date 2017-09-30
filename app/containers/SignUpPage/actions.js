/*
 *
 * SignUpPage actions
 *
 */

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

export function signUpRequest(userData) {
  return {
    type: SIGNUP_REQUEST,
    userData,
  };
}

export function signUpSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  };
}

export function signUpError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}
