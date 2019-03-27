import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

const makeSelectCurrentPosition = () =>
  createSelector(selectApp, appState => appState.get('currentPosition').toJS());

const makeSelectDirection = () =>
  createSelector(selectApp, appState => appState.get('direction'));

const makeSelectCommand = () =>
  createSelector(selectApp, appState => appState.get('command'));

const makeSelectError = () =>
  createSelector(selectApp, appState => appState.get('error'));

export {
  makeSelectCurrentPosition,
  makeSelectDirection,
  makeSelectCommand,
  makeSelectError,
};
