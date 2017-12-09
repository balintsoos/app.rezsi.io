import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  CREATE,
  DOWNLOAD,
} from './constants';
import {
  fetchSuccess,
  fetchError,
  createSuccess,
  createError,
  downloadSuccess,
  downloadError,
} from './actions';

export function* fetchSummaries({ id }) {
  try {
    const summaries = yield call(API.group.summaries.get, id);
    yield put(fetchSuccess(summaries));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* createSummary({ id, summary: payload }) {
  try {
    const group = yield call(API.group.summaries.post, { id, payload });
    yield put(createSuccess(group));
  } catch (err) {
    yield put(createError(err));
  }
}

export function* downloadSummary({ id, summaryId }) {
  try {
    yield call(API.group.summary.download, { id, summaryId });
    yield put(downloadSuccess());
  } catch (err) {
    yield put(downloadError(err));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchSummaries);
  yield takeLatest(CREATE, createSummary);
  yield takeLatest(DOWNLOAD, downloadSummary);
}
