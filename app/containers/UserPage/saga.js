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

export function* fetchUser() {
  try {
    const user = yield call(API.auth);
    yield put(fetchSuccess(user));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* createReport(action) {
  try {
    const report = yield call(API.report.post, action.report);
    yield put(createReportSuccess(report));
  } catch (err) {
    yield put(createReportError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchUser);
  yield takeLatest(CREATE_REPORT, createReport);
}
