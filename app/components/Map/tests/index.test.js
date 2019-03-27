import { shallow } from 'enzyme/build';
import React from 'react';
import Map, { MapContainer } from '../index';

describe('shallow render test', () => {
  const renderedComponent = shallow(<Map />);
  it('should render the Map', () => {
    expect(renderedComponent.find(MapContainer).length).toBe(1);
  });
});
