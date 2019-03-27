import Cube from '../index';

describe('shallow render test', () => {
  it('should render the a div as cube', () => {
    expect(Cube.target).toBe('div');
  });
});
