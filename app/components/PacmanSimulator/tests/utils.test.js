import {
  getDirectionByNumber,
  getNumberByDirection,
  rotateDirection,
  validateCommand,
  validateMove,
  validatePlace,
  report,
} from '../utils';

describe('util test', () => {
  it('should validate Move Command correctly', () => {
    for (let i = 1; i < 4; i += 1) {
      for (let j = 1; j < 4; j += 1) {
        expect(validateMove({ x: i, y: j }, 'NORTH').valid).toBe(true);
      }
    }

    for (let i = 0; i < 5; i += 1) {
      expect(validateMove({ x: i, y: 4 }, 'NORTH').valid).toBe(false);
      expect(validateMove({ x: i, y: 0 }, 'SOUTH').valid).toBe(false);
      expect(validateMove({ x: 0, y: i }, 'WEST').valid).toBe(false);
      expect(validateMove({ x: 4, y: i }, 'EAST').valid).toBe(false);
    }
  });

  it('should get correct corresponding Number of Direction ', () => {
    expect(getNumberByDirection('NORTH')).toBe(1);
    expect(getNumberByDirection('WEST')).toBe(4);
    expect(getNumberByDirection('EAST')).toBe(2);
    expect(getNumberByDirection('SOUTH')).toBe(3);
    expect(getNumberByDirection('DSADA')).toBe(0);
  });

  it('should get correct corresponding Direction of Number', () => {
    expect(getDirectionByNumber(1)).toBe('NORTH');
    expect(getDirectionByNumber(2)).toBe('EAST');
    expect(getDirectionByNumber(3)).toBe('SOUTH');
    expect(getDirectionByNumber(4)).toBe('WEST');
    expect(getDirectionByNumber(100)).toBe('');
  });

  it('should rotate direction correctly', () => {
    expect(rotateDirection('WEST', 1)).toBe('NORTH');
    expect(rotateDirection('NORTH', 1)).toBe('EAST');
    expect(rotateDirection('EAST', 1)).toBe('SOUTH');
    expect(rotateDirection('SOUTH', 1)).toBe('WEST');
    expect(rotateDirection('NORTH', 2)).toBe('SOUTH');
    expect(rotateDirection('NORTH', 3)).toBe('WEST');
    expect(rotateDirection('NORTH', 4)).toBe('NORTH');
    expect(rotateDirection('NORTH', 100)).toBe('NORTH');
  });

  it('should validate PLACE command correctly', () => {
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        expect(validatePlace(i, j, 'WEST').valid).toBe(true);
        expect(validatePlace(i, j, 'NORTH').valid).toBe(true);
        expect(validatePlace(i, j, 'EAST').valid).toBe(true);
        expect(validatePlace(i, j, 'SOUTH').valid).toBe(true);
      }
    }
    expect(validatePlace(5, 0, 'WEST').valid).toBe(false);
    expect(validatePlace('a', 0, 'WEST').valid).toBe(false);
    expect(validatePlace(4, 'b', 'WEST').valid).toBe(false);
    expect(validatePlace(4, 4, 'MIDDLE').valid).toBe(false);
  });

  it('should validate COMMAND text correctly', () => {
    expect(validateCommand('LEFT').valid).toBe(true);
    expect(validateCommand('RIGHT').valid).toBe(true);
    expect(validateCommand('MOVE').valid).toBe(true);
    expect(validateCommand('REPORT').valid).toBe(true);
    expect(validateCommand('PLACE 1,1,WEST').valid).toBe(true);

    expect(validateCommand('').valid).toBe(false);
    expect(validateCommand('STRING').valid).toBe(false);
    expect(validateCommand('RANDOM STRING').valid).toBe(false);

    expect(validateCommand('lEfT').valid).toBe(false);
    expect(validateCommand('rIght').valid).toBe(false);

    expect(validateCommand('LEFT 1').valid).toBe(false);
    expect(validateCommand('MOVE STRING').valid).toBe(false);
    expect(validateCommand('RIGHT SECOND').valid).toBe(false);
    expect(validateCommand('REPORT SECOND').valid).toBe(false);

    expect(validateCommand('PLACE').valid).toBe(false);
    expect(validateCommand('PLACE 1').valid).toBe(false);
    expect(validateCommand('PLACE 1,1').valid).toBe(false);
    expect(validateCommand('PLACE 1,1,MIDDLE').valid).toBe(false);
  });

  it('should report correct position and direction', () => {
    const currentPosition = {
      x: 2,
      y: 2,
    };
    const direction = 'NORTH';
    expect(report(currentPosition, direction)).toBe('2,2,NORTH');
  });
});
