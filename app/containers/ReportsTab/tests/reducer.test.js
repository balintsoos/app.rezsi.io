
import { fromJS } from 'immutable';
import reportsTabReducer from '../reducer';

describe('reportsTabReducer', () => {
  it('returns the initial state', () => {
    expect(reportsTabReducer(undefined, {})).toEqual(fromJS({}));
  });
});
