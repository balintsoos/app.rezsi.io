import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';
import { remove } from 'utils/token';

import { AUTHENTICATE, UNAUTHENTICATE } from './constants';
import { authSuccess, authFail } from './actions';

export function* authenticate() {
  try {
    const user = yield call(API.auth);
    yield put(authSuccess(user));
  } catch (err) {
    remove();
    yield put(authFail(err.message));
  }
}

export function* unauthenticate() {
  remove();
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(AUTHENTICATE, authenticate);
  yield takeLatest(UNAUTHENTICATE, unauthenticate);
}
