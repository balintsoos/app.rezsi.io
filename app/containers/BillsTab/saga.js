import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
  DOWNLOAD,
} from './constants';

import {
  fetchSuccess,
  fetchError,
  downloadSuccess,
  downloadError,
} from './actions';

export function* fetchBills({ groupId, userId }) {
  try {
    const bills = yield call(API.group.user.bills.get, { groupId, userId });
    yield put(fetchSuccess(bills));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

export function* downloadBills({ groupId, userId, billId }) {
  try {
    yield call(API.group.user.bill.download, { groupId, userId, billId });
    yield put(downloadSuccess());
  } catch (err) {
    yield put(downloadError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchBills);
  yield takeLatest(DOWNLOAD, downloadBills);
}
