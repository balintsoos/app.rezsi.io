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

export function* fetchUsers({ id }) {
  try {
    const users = yield call(API.group.users.get, id);
    yield put(fetchSuccess(users));
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
  yield takeLatest(FETCH, fetchUsers);
  yield takeLatest(DELETE_USER, deleteUser);
}
