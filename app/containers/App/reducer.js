import { fromJS } from 'immutable';

import { rotateDirection } from 'components/PacmanSimulator/utils';
import { MOVE, LEFT, PLACE, RIGHT, COMMAND, ERROR } from './constants';

export const initialState = fromJS({
  command: '',
  currentPosition: { x: 0, y: 0 },
  direction: 'NORTH',
  error: '',
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case COMMAND:
      return state.set('command', action.message);
    case ERROR:
      return state.set('error', action.message);
    case PLACE:
      return state
        .set('currentPosition', fromJS({ x: action.x, y: action.y }))
        .set('direction', action.f)
        .set('error', '');
    case LEFT:
      return state
        .update('direction', direction => rotateDirection(direction, -1))
        .set('error', '');
    case RIGHT:
      return state
        .update('direction', direction => rotateDirection(direction, +1))
        .set('error', '');
    case MOVE:
      return state
        .set('currentPosition', fromJS({ x: action.x, y: action.y }))
        .set('error', '');
    default:
      return state;
  }
}

export default AppReducer;
