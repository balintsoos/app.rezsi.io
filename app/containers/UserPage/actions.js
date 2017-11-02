/*
 *
 * UserPage actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

export function fetchRequest() {
  return {
    type: FETCH,
  };
}

export function fetchSuccess(user) {
  return {
    type: FETCH_SUCCESS,
    user,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}
