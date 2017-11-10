import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'utils/API';

import {
  FETCH,
} from './constants';

import {
  fetchSuccess,
  fetchError,
} from './actions';

export function* fetchBills({ groupId, userId }) {
  try {
    const bills = yield call(API.group.user.bills.get, { groupId, userId });
    yield put(fetchSuccess(bills));
  } catch (err) {
    yield put(fetchError(err.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(FETCH, fetchBills);
}
