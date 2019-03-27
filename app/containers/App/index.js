import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectCommand,
  makeSelectCurrentPosition,
  makeSelectDirection,
  makeSelectError,
} from './selectors';
import { move, place, left, right, setCommand, setError } from './actions';
import PacmanSimulator from '../../components/PacmanSimulator';

function App(props) {
  return <PacmanSimulator {...props} />;
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setCommand: message => dispatch(setCommand(message)),
    place: (x, y, f) => dispatch(place(x, y, f)),
    move: ({ x, y }) => dispatch(move({ x, y })),
    left: () => dispatch(left()),
    right: () => dispatch(right()),
    setError: message => dispatch(setError(message)),
  };
}

PacmanSimulator.propTypes = {
  currentPosition: PropTypes.object,
  direction: PropTypes.string,
  setCommand: PropTypes.func,
  place: PropTypes.func,
  move: PropTypes.func,
  left: PropTypes.func,
  right: PropTypes.func,
  setError: PropTypes.func,
  command: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentPosition: makeSelectCurrentPosition(),
  direction: makeSelectDirection(),
  command: makeSelectCommand(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);

export { App };
