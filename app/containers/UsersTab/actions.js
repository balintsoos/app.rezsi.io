/*
 *
 * UsersTab actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './constants';

export function fetchRequest(id) {
  return {
    type: FETCH,
    id,
  };
}

export function fetchSuccess(users) {
  return {
    type: FETCH_SUCCESS,
    users,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}

export function deleteUser({ groupId, userId }) {
  return {
    type: DELETE_USER,
    groupId,
    userId,
  };
}

export function deleteUserSuccess(id) {
  return {
    type: DELETE_USER_SUCCESS,
    id,
  };
}

export function deleteUserError(error) {
  return {
    type: DELETE_USER_ERROR,
    error,
  };
}
