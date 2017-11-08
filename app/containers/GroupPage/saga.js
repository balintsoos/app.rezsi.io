import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  DELETE_USER,
} from './constants';

import {
  fetchSuccess,
  fetchError,
  deleteUserSuccess,
  deleteUserError,
} from './actions';

export function* fetchGroup({ id }) {
  try {
    const group = yield call(API.group.get, id);
    yield put(fetchSuccess(group));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* deleteUser({ groupId, userId }) {
  try {
    const deletedUser = yield call(API.group.user.delete, { groupId, userId });
    yield put(deleteUserSuccess(deletedUser.id));
  } catch (err) {
    yield put(deleteUserError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchGroup);
  yield takeLatest(DELETE_USER, deleteUser);
}
