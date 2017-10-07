
import { fromJS } from 'immutable';
import groupsPageReducer from '../reducer';

describe('groupsPageReducer', () => {
  it('returns the initial state', () => {
    expect(groupsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
