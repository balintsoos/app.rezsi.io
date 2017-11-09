/*
 *
 * SummariesTab actions
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

export function fetchRequest(id) {
  return {
    type: FETCH,
    id,
  };
}

export function fetchSuccess(summaries) {
  return {
    type: FETCH_SUCCESS,
    summaries,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}

export function createRequest(id, summary) {
  return {
    type: CREATE,
    id,
    summary,
  };
}

export function createSuccess(summary) {
  return {
    type: CREATE_SUCCESS,
    summary,
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
