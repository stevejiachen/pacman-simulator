import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cube from '../Cube';

const MapContainer = styled.div`
  width: ${props => `${(props.cubeNumber || 5) * 100}px` || '500px'};
  height: ${props => `${(props.cubeNumber || 5) * 100}px` || '500px'};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export default function Map(props) {
  const { cubeNumber = 5 } = props;
  const cubes = [];
  for (let i = 0; i < cubeNumber * cubeNumber; i += 1) {
    cubes.push(<Cube key={`${i}grid`} />);
  }
  const childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, { cubeNumber }),
  );
  return (
    <MapContainer>
      {cubes}
      {childrenWithProps}
    </MapContainer>
  );
}

Map.propTypes = {
  cubeNumber: PropTypes.object,
  children: PropTypes.object,
};

export { MapContainer };
