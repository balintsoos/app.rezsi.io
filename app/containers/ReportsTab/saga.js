import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH } from './constants';
import {
  fetchSuccess,
  fetchError,
} from './actions';

export function* fetchReports({ groupId, userId }) {
  try {
    const reports = yield call(API.group.user.reports.get, { groupId, userId });
    yield put(fetchSuccess(reports));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchReports);
}
