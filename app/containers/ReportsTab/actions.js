/*
 *
 * ReportsTab actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './constants';

export function fetchRequest(groupId, userId) {
  return {
    type: FETCH,
    groupId,
    userId,
  };
}

export function fetchSuccess(reports) {
  return {
    type: FETCH_SUCCESS,
    reports,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}
