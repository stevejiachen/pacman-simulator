import React from 'react';
import { mount } from 'enzyme';

import Pacman from 'components/Pacman';
import Map from 'components/Map';
import PacmanSimulator from '../index';

describe('render test', () => {
  const mockStore = {
    currentPosition: { x: 1, y: 1 },
    direction: 'WEST',
    left: () => {},
    right: () => {},
    move: () => {},
    setError: () => {},
  };
  const renderedComponent = mount(<PacmanSimulator {...mockStore} />);
  it('should render the Map', () => {
    expect(renderedComponent.find(Map).length).toBe(1);
  });
  it('should render the pacaman', () => {
    expect(renderedComponent.find(Pacman).length).toBe(1);
  });
});
