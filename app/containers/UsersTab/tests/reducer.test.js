
import { fromJS } from 'immutable';
import usersTabReducer from '../reducer';

describe('usersTabReducer', () => {
  it('returns the initial state', () => {
    expect(usersTabReducer(undefined, {})).toEqual(fromJS({}));
  });
});
