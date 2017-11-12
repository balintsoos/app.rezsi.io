import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  CREATE,
} from './constants';

import {
  fetchSuccess,
  fetchError,
  createSuccess,
  createError,
} from './actions';

export function* fetchReports({ groupId, userId }) {
  try {
    const reports = yield call(API.group.user.reports.get, { groupId, userId });
    yield put(fetchSuccess(reports));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* createReport({ groupId, userId, report: payload }) {
  try {
    const report = yield call(API.group.user.reports.post, { groupId, userId, payload });
    yield put(createSuccess(report));
  } catch (err) {
    yield put(createError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchReports);
  yield takeLatest(CREATE, createReport);
}
