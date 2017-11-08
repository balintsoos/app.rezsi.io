import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import API from 'utils/API';
import { SIGNUP_REQUEST } from './constants';
import { signUpSuccess, signUpError } from './actions';

export function* signUp({ userData }) {
  try {
    const { domain } = yield call(API.signUp, userData);
    yield put(signUpSuccess());
    yield put(push(`/signup?success=${domain}`));
  } catch (err) {
    yield put(signUpError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}
