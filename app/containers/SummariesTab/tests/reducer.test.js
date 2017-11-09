
import { fromJS } from 'immutable';
import summariesTabReducer from '../reducer';

describe('summariesTabReducer', () => {
  it('returns the initial state', () => {
    expect(summariesTabReducer(undefined, {})).toEqual(fromJS({}));
  });
});
