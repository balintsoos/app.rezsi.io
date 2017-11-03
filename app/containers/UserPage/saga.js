import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  CREATE_REPORT,
} from './constants';

import {
  fetchSuccess,
  fetchError,
  createReportSuccess,
  createReportError,
} from './actions';

export function* fetchReports() {
  try {
    const reports = yield call(API.reports.get);
    yield put(fetchSuccess(reports));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* createReport(action) {
  try {
    const report = yield call(API.reports.post, action.report);
    yield put(createReportSuccess(report));
  } catch (err) {
    yield put(createReportError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchReports);
  yield takeLatest(CREATE_REPORT, createReport);
}
