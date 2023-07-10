const {Shapes, Square, Circle, Triangle} = require('./lib/shapes');

describe('Circle', () => {
    it("should render a circle that's blue", () => {
      const shape = new Circle();
      shape.setColor('blue');
      const expected = `<circle cx="150" cy="100" r="80" style="fill:blue" />`;
      expect(shape.render()).toEqual(expected);
    });
  });
  
  describe('Triangle', () => {
    it("should render a triangle that's red", () => {
      const shape = new Triangle();
      shape.setColor('red');
      const expected = `<polygon points="150,50 100,150 200,150" style="fill:red" />`;
  
      expect(shape.render()).toEqual(expected);
    });
  });
  
  describe('Square', () => {
    it("should render a square that's green", () => {
      const shape = new Square();
      shape.setColor('green');
      const expected = `<rect x="100" y="100" width="100" height="100" style="fill:green" />`;
  
      expect(shape.render()).toEqual(expected);
    });
  });
  