/*
 *
 * BillsTab actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DOWNLOAD,
  DOWNLOAD_SUCCESS,
  DOWNLOAD_ERROR,
} from './constants';

export function fetchRequest(groupId, userId) {
  return {
    type: FETCH,
    groupId,
    userId,
  };
}

export function fetchSuccess(bills) {
  return {
    type: FETCH_SUCCESS,
    bills,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}

export function download(groupId, userId, billId) {
  return {
    type: DOWNLOAD,
    groupId,
    userId,
    billId,
  };
}

export function downloadSuccess() {
  return {
    type: DOWNLOAD_SUCCESS,
  };
}

export function downloadError(error) {
  return {
    type: DOWNLOAD_ERROR,
    error,
  };
}
