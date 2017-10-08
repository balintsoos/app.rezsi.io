import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import { FETCH } from './constants';
import {
  fetchSuccess,
  fetchError,
} from './actions';

export function* fetchGroups({ id }) {
  try {
    const group = yield call(API.getGroup, id);
    yield put(fetchSuccess(group));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchGroups);
}
