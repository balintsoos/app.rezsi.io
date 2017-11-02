import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH } from './constants';
import {
  fetchSuccess,
  fetchError,
} from './actions';

export function* fetchUser() {
  try {
    const user = yield call(API.getUser);
    yield put(fetchSuccess(user));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchUser);
}
