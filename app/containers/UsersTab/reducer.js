/*
 *
 * UsersTab reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
  users: [],
});

function usersTabReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', '');

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .set('users', List(action.users));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case DELETE_USER:
      return state
        .set('loading', true)
        .set('error', '');

    case DELETE_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', '')
        .update('users', (users) => users
          .remove(users.findIndex((user) => user.id === action.id)));

    case DELETE_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
}

export default usersTabReducer;
