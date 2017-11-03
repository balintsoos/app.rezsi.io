import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH, CREATE } from './constants';
import {
  fetchSuccess,
  fetchError,
  createSuccess,
  createError,
} from './actions';

export function* fetchGroups() {
  try {
    const groups = yield call(API.groups.get);
    yield put(fetchSuccess(groups));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* createGroup(action) {
  try {
    const group = yield call(API.group.post, action.group);
    yield put(createSuccess(group));
  } catch (err) {
    yield put(createError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchGroups);
  yield takeLatest(CREATE, createGroup);
}
