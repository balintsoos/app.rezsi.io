/*
 *
 * GroupPage actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

export function fetchRequest(id) {
  return {
    type: FETCH,
    id,
  };
}

export function fetchSuccess(group) {
  return {
    type: FETCH_SUCCESS,
    group,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}
