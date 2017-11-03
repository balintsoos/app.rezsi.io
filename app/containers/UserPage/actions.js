/*
 *
 * UserPage actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE_REPORT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

export function fetchRequest() {
  return {
    type: FETCH,
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

export function createReportRequest(report) {
  return {
    type: CREATE_REPORT,
    report,
  };
}

export function createReportSuccess(report) {
  return {
    type: CREATE_REPORT_SUCCESS,
    report,
  };
}

export function createReportError(error) {
  return {
    type: CREATE_REPORT_ERROR,
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
