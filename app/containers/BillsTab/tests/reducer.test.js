
import { fromJS } from 'immutable';
import billsTabReducer from '../reducer';

describe('billsTabReducer', () => {
  it('returns the initial state', () => {
    expect(billsTabReducer(undefined, {})).toEqual(fromJS({}));
  });
});
