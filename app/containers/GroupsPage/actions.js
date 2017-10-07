/*
 *
 * GroupsPage actions
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

export function fetchRequest() {
  return {
    type: FETCH,
  };
}

export function fetchSuccess(groups) {
  return {
    type: FETCH_SUCCESS,
    groups,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}

export function createRequest(group) {
  return {
    type: CREATE,
    group,
  };
}

export function createSuccess(group) {
  return {
    type: CREATE_SUCCESS,
    group,
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
