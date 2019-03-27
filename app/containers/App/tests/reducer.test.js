import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { move, place, left, right, setCommand, setError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      currentPosition: { x: 0, y: 0 },
      direction: 'NORTH',
      error: '',
      command: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the set command action correctly', () => {
    const expectedResult = state.set('command', 'PLACE 1,1,NORTYH');
    expect(appReducer(state, setCommand('PLACE 1,1,NORTYH'))).toEqual(
      expectedResult,
    );
  });

  it('should handle the move command action correctly', () => {
    const expectedResult = state.set('currentPosition', fromJS({ x: 4, y: 4 }));
    expect(appReducer(state, move({ x: 4, y: 4 }))).toEqual(expectedResult);
  });

  it('should handle the set Error action correctly', () => {
    const expectedResult = state.set('error', 'this is an error');
    expect(appReducer(state, setError('this is an error'))).toEqual(
      expectedResult,
    );
  });

  it('should handle the left/right command action correctly', () => {
    const expectedResult1 = state.set('direction', 'WEST');
    expect(appReducer(state, left())).toEqual(expectedResult1);
    expect(appReducer(expectedResult1, right())).toEqual(state);
  });

  it('should handle place command action correctly', () => {
    const expectedResult1 = state
      .set('direction', 'EAST')
      .set('currentPosition', fromJS({ x: 2, y: 3 }));
    expect(appReducer(state, place(2, 3, 'EAST'))).toEqual(expectedResult1);
  });
});
