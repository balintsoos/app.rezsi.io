import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH } from './constants';
import {
  fetchSuccess,
  fetchError,
} from './actions';

export function* fetchUser({ groupId, userId }) {
  try {
    const user = yield call(API.group.user.get, { groupId, userId });
    yield put(fetchSuccess(user));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchUser);
}
