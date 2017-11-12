/*
 *
 * ReportsTab actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
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

export function createRequest(groupId, userId, report) {
  return {
    type: CREATE,
    groupId,
    userId,
    report,
  };
}

export function createSuccess(report) {
  return {
    type: CREATE_SUCCESS,
    report,
  };
}

export function createError(error) {
  return {
    type: CREATE_ERROR,
    error,
  };
}

export function openDialog(dialog) {
  return {
    type: OPEN_DIALOG,
    dialog,
  };
}

export function closeDialog(dialog) {
  return {
    type: CLOSE_DIALOG,
    dialog,
  };
}
