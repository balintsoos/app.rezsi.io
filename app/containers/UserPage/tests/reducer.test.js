
import { fromJS } from 'immutable';
import userPageReducer from '../reducer';

describe('userPageReducer', () => {
  it('returns the initial state', () => {
    expect(userPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
