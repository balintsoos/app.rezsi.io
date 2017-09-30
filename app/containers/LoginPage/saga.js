import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import API from 'utils/API';
import { LOGIN_REQUEST } from './constants';
import { loginSuccess, loginError } from './actions';

export function* login(props) {
  try {
    yield call(API.login, props);
    yield put(loginSuccess());
    yield put(push('/'));
  } catch (err) {
    yield put(loginError(err));
  }
}


// Root saga
export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
