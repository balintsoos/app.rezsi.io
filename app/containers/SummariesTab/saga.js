import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  CREATE,
} from './constants';
import {
  fetchSuccess,
  fetchError,
  createSuccess,
  createError,
} from './actions';

export function* fetchGroups({ id }) {
  try {
    const summaries = yield call(API.group.summaries.get, id);
    yield put(fetchSuccess(summaries));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* createGroup({ id, summary: payload }) {
  try {
    const group = yield call(API.group.summaries.post, { id, payload });
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
