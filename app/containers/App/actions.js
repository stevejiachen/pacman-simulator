import { MOVE, LEFT, PLACE, RIGHT, COMMAND, ERROR } from './constants';

export function setCommand(message) {
  return {
    type: COMMAND,
    message,
  };
}

export function setError(message) {
  return {
    type: ERROR,
    message,
  };
}

export function report() {
  return {
    type: LEFT,
  };
}

export function left(currentDirection) {
  return {
    type: LEFT,
    currentDirection,
  };
}

export function right(currentDirection) {
  return {
    type: RIGHT,
    currentDirection,
  };
}

export function place(x, y, f) {
  return {
    type: PLACE,
    x,
    y,
    f,
  };
}

export function move({ x, y }) {
  return {
    type: MOVE,
    x,
    y,
  };
}
