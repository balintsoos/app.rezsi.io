import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import API from 'utils/API';
import { set } from 'utils/token';
import { authSuccess } from 'containers/Auth/actions';

import { LOGIN_REQUEST } from './constants';
import { loginSuccess, loginError } from './actions';

export function* login({ email, password }) {
  try {
    const { user, token } = yield call(API.login, { email, password });
    yield put(loginSuccess());
    set(token);
    yield put(authSuccess(user));
    yield put(push('/'));
  } catch (err) {
    yield put(loginError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
