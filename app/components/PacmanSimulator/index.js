import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { validateCommand, validateMove, report } from './utils';
import Map from '../Map';
import Pacman from '../Pacman';
import {
  CommandContainer,
  InputWithError,
  Error,
  QuickAccess,
} from './StyledComponents';

class PacmanSimulator extends React.PureComponent {
  handleMove = () => {
    const result = validateMove(
      this.props.currentPosition,
      this.props.direction,
    );
    if (result.valid) {
      this.props.move(result.position);
    } else {
      this.props.setError(result.message);
    }
  };

  handleTyping = e => {
    this.props.setCommand(e.target.value.toUpperCase());
  };

  handleCommand = () => {
    const result = validateCommand(this.props.command);
    if (result.valid) {
      switch (result.command) {
        case 'REPORT':
          this.handleReport();
          break;
        case 'LEFT':
          this.props.left();
          break;
        case 'RIGHT':
          this.props.right();
          break;
        case 'MOVE':
          this.handleMove();
          break;
        case 'PLACE':
          this.props.place(
            result.position.x,
            result.position.y,
            result.direction,
          );
          break;
        default:
          break;
      }
    } else {
      this.props.setError(result.message);
    }
  };

  handleReport = () => {
    const { currentPosition, direction } = this.props;
    alert(report(currentPosition, direction));
  };

  render() {
    const { currentPosition, direction, command, error } = this.props;
    return (
      <div>
        <Map>
          <Pacman
            direction={direction}
            xCordinate={currentPosition.x}
            yCordinate={currentPosition.y}
          />
        </Map>
        <CommandContainer>
          <InputWithError>
            <Input
              style={{ width: '200px' }}
              placeholder="Please give a command"
              value={command}
              onChange={this.handleTyping}
              error={!!error}
            />
            {error && <Error>{error}</Error>}
          </InputWithError>
          <Button onClick={this.handleCommand} type="button">
            Submit
          </Button>
        </CommandContainer>
        <QuickAccess>
          <Button onClick={this.props.left}>left</Button>
          <Button onClick={this.props.right}>right</Button>
          <Button onClick={this.handleMove}>Move</Button>
          <Button onClick={this.handleReport}>Report</Button>
        </QuickAccess>
      </div>
    );
  }
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

export default PacmanSimulator;
