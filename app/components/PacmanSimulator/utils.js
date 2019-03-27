const getNumberByDirection = direction => {
  switch (direction) {
    case 'NORTH':
      return 1;
    case 'EAST':
      return 2;
    case 'SOUTH':
      return 3;
    case 'WEST':
      return 4;
    default:
      return 0;
  }
};

const getDirectionByNumber = number => {
  switch (number) {
    case 1:
      return 'NORTH';
    case 2:
      return 'EAST';
    case 3:
      return 'SOUTH';
    case 4:
      return 'WEST';
    default:
      return '';
  }
};

const rotateDirection = (direction, number) => {
  const directionNumber = getNumberByDirection(direction);
  const newDirectionNumber =
    Math.abs(directionNumber + number) % 5 || (number > 0 ? 1 : 4);
  return getDirectionByNumber(newDirectionNumber);
};

export function validateMove(
  currentPosition,
  direction,
  boundaryX = 5,
  boundaryY = 5,
) {
  let xTowards = 0;
  let yTowards = 0;
  switch (direction) {
    case 'NORTH':
      yTowards = 1;
      break;
    case 'WEST':
      xTowards = -1;
      break;
    case 'EAST':
      xTowards = 1;
      break;
    case 'SOUTH':
      yTowards = -1;
      break;
    default:
      break;
  }
  // eslint-disable-next-line radix
  const x = parseInt(currentPosition.x) + xTowards;
  // eslint-disable-next-line radix
  const y = parseInt(currentPosition.y) + yTowards;
  if (x >= 0 && x < boundaryX && y >= 0 && y < boundaryY) {
    return {
      valid: true,
      command: 'MOVE',
      position: { x, y },
    };
  }
  return {
    valid: false,
    message: 'move exceed the boundary',
  };
}

const directions = ['NORTH', 'WEST', 'EAST', 'SOUTH'];

const validatePlace = (x, y, d, xBoundary = 5, yBoundary = 5) => {
  if (
    typeof x === 'number' &&
    typeof y === 'number' &&
    typeof d === 'string' &&
    x >= 0 &&
    x < xBoundary &&
    x % 1 === 0 &&
    y >= 0 &&
    y < yBoundary &&
    y % 1 === 0 &&
    directions.some(direction => direction === d)
  ) {
    return {
      valid: true,
      command: 'PLACE',
      position: { x, y },
      direction: d,
    };
  }
  return {
    valid: false,
    message: 'Invalid place, it must be NUMBER between 0 - 4 and a direction',
  };
};

const validateCommand = message => {
  const commandWords = message.split(' ');
  const singeleWordCommands = ['LEFT', 'RIGHT', 'REPORT', 'MOVE'];
  if (
    commandWords.length === 1 &&
    singeleWordCommands.some(command => commandWords[0] === command)
  ) {
    return {
      valid: true,
      command: commandWords[0],
    };
  }
  if (commandWords.length === 2 && commandWords[0] === 'PLACE') {
    const options = commandWords[1].split(',');
    if (options.length !== 3) {
      return {
        valid: false,
        message: 'should have x, y and direction',
      };
    }
    return validatePlace(
      // eslint-disable-next-line radix
      parseInt(options[0]),
      // eslint-disable-next-line radix
      parseInt(options[1]),
      options[2],
    );
  }
  return {
    valid: false,
    message: 'not valid command',
  };
};

const report = (currentPosition, direction) =>
  `${currentPosition.x},${currentPosition.y},${direction}`;

export {
  getNumberByDirection,
  getDirectionByNumber,
  rotateDirection,
  validatePlace,
  validateCommand,
  report,
};
