const calc = require('../lib/calculator');

describe('calculator basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });

  test('supports negative numbers and floats', () => {
    expect(calc.add(-1, 1)).toBe(0);
    expect(calc.mul(0.5, 2)).toBeCloseTo(1);
  });
});
