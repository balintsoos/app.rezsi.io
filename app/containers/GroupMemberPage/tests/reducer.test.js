
import { fromJS } from 'immutable';
import groupMemberPageReducer from '../reducer';

describe('groupMemberPageReducer', () => {
  it('returns the initial state', () => {
    expect(groupMemberPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
