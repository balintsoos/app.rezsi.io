
import { fromJS } from 'immutable';
import groupPageReducer from '../reducer';

describe('groupPageReducer', () => {
  it('returns the initial state', () => {
    expect(groupPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
