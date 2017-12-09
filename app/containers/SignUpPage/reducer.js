/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: {},
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return state
        .set('loading', true);

    case SIGNUP_SUCCESS:
      return state
        .set('loading', false)
        .set('error', {});

    case SIGNUP_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default signUpPageReducer;
