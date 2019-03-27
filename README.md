Application Structure:
<ul>
  <li>
    <p>To run the App: 
    <strong>npm install</strong> & <strong>npm start</strong></p>
    <p>To run the Test: <strong>npm test</strong></p>
  </li>
  <li>Main Library use: React, Redux, Immutablejs, Reselect, Styled-component, MaterialUI, Jest, Enzyme etc</li>
  <li>
    containers: 
    <ul>
      <li>constants: command string: LEFT, RIGHT, MOVE, PLACE, REPORT</li>
      <li>actions: actions generator for redux</li>
      <li>reducer: redux store reducer for handling actions</li>
      <li>selectors: redux store state selectors</li>
    </ul>
  </li>
  <li>
    components: 
    <ul>
      <li>Cube: 100 x 100 px rectangle box</li>
      <li>Map: 5 x 5 of Cubes form the Grid Map which pacman can move within</li>
      <li>Pacman: have pacam avator image that can rotate to 4 directions</li>
      <li>  
        PacamanSimulator: 
        <ul>
          <li>main application control component, Input could take commands and have 4 quick access button</li>
          <li>utils: contains all pacman movement behavior and command validation</li>
          <li>StyledComponents: styled components such as Input, Error, Button Container
        </ul>
      </li>
    </ul>
  </li>
  <li>All utility functions (MOVE, LEFT, RIGHT, PLACE, REPORT) have unit tests, all components have basic render test</li>
 
</ul>
