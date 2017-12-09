import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  CREATE,
  EDIT,
  DELETE,
} from './constants';
import {
  fetchSuccess,
  fetchError,
  createSuccess,
  createError,
  editSuccess,
  editError,
  deleteSuccess,
  deleteError,
} from './actions';

export function* fetchGroups() {
  try {
    const groups = yield call(API.groups.get);
    yield put(fetchSuccess(groups));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* createGroup(action) {
  try {
    const group = yield call(API.groups.post, action.group);
    yield put(createSuccess(group));
  } catch (err) {
    yield put(createError(err));
  }
}

export function* editGroup({ group }) {
  const { id } = group;
  const payload = group;

  try {
    const editedGroup = yield call(API.group.patch, { id, payload });
    yield put(editSuccess(editedGroup));
  } catch (err) {
    yield put(editError(err));
  }
}

export function* deleteGroup({ group }) {
  try {
    const deletedGroup = yield call(API.group.delete, group.id);
    yield put(deleteSuccess(deletedGroup.id));
  } catch (err) {
    yield put(deleteError(err));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchGroups);
  yield takeLatest(CREATE, createGroup);
  yield takeLatest(EDIT, editGroup);
  yield takeLatest(DELETE, deleteGroup);
}
