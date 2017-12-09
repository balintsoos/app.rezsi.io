/*
 *
 * GroupsPage reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
  EDIT,
  EDIT_SUCCESS,
  EDIT_ERROR,
  DELETE,
  DELETE_SUCCESS,
  DELETE_ERROR,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: {},
  groups: [],
  createDialog: false,
  editDialog: false,
  deleteDialog: false,
});

function groupsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('loading', true)
        .set('error', {});

    case FETCH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', {})
        .set('groups', List(action.groups));

    case FETCH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case CREATE:
      return state
        .set('loading', true);

    case CREATE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', {})
        .set('createDialog', false)
        .update('groups', (groups) => groups.unshift(action.group));

    case CREATE_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case EDIT:
      return state
        .set('loading', true);

    case EDIT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', {})
        .set('editDialog', false)
        .update('groups', (groups) => groups
          .set(groups.findIndex((group) => group.id === action.group.id), action.group));

    case EDIT_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case DELETE:
      return state
        .set('loading', true)
        .set('error', {});

    case DELETE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', {})
        .set('deleteDialog', false)
        .update('groups', (groups) => groups
          .remove(groups.findIndex((group) => group.id === action.id)));

    case DELETE_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    case OPEN_DIALOG:
      return state
        .set(action.dialog, true);

    case CLOSE_DIALOG:
      return state
        .set(action.dialog, false)
        .set('error', {});

    default:
      return state;
  }
}

export default groupsPageReducer;
