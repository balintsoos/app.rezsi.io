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
  EDIT,
  EDIT_SUCCESS,
  EDIT_ERROR,
  DELETE,
  DELETE_SUCCESS,
  DELETE_ERROR,
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

export function editRequest(group) {
  return {
    type: EDIT,
    group,
  };
}

export function editSuccess(group) {
  return {
    type: EDIT_SUCCESS,
    group,
  };
}

export function editError(error) {
  return {
    type: EDIT_ERROR,
    error,
  };
}

export function deleteRequest(group) {
  return {
    type: DELETE,
    group,
  };
}

export function deleteSuccess(id) {
  return {
    type: DELETE_SUCCESS,
    id,
  };
}

export function deleteError(error) {
  return {
    type: DELETE_ERROR,
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
