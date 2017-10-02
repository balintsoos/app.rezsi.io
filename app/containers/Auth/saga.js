import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import API from 'utils/API';
import { remove } from 'utils/token';

import { AUTHENTICATE, UNAUTHENTICATE } from './constants';
import { authSuccess, authError } from './actions';

export function* authenticate() {
  try {
    const user = yield call(API.authenticate);
    yield put(authSuccess(user));
  } catch (err) {
    remove();
    yield put(authError(err.message));
    yield put(push('/login'));
  }
}

export function* unauthenticate() {
  remove();
  yield put(push('/login'));
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(AUTHENTICATE, authenticate);
  yield takeLatest(UNAUTHENTICATE, unauthenticate);
}
