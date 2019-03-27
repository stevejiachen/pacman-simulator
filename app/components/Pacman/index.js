import React from 'react';
import styled from 'styled-components';
import pacman from 'images/pacman.png';

const mapDirectionToDegree = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

const offSet = 25;

const PacmanWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  transform: rotate(${props => mapDirectionToDegree[props.direction]}deg);
  top: ${props =>
    (props.cubeNumber - 1 - props.yCordinate || 0) * 100 + offSet}px;
  left: ${props => (props.xCordinate || 0) * 100 + offSet}px;
  box-sizing: border-box;

  img {
    width: 50px;
    height: 50px;
  }
`;

export default props => (
  <PacmanWrapper {...props}>
    <img src={pacman} alt="pacman avator" />
  </PacmanWrapper>
);
