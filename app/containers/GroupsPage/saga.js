import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH } from './constants';
import { fetchSuccess, fetchError } from './actions';

export function* fetch() {
  try {
    const groups = yield call(API.groups);
    yield put(fetchSuccess(groups));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetch);
}
