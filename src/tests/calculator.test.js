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

describe('calculator extended operations', () => {
  // modulo
  test('5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('10 % 3 = 1', () => {
    expect(calc.modulo(10, 3)).toBe(1);
  });

  test('modulo with negative dividend', () => {
    expect(calc.modulo(-7, 3)).toBe(-1);
  });

  test('modulo with zero dividend', () => {
    expect(calc.modulo(0, 5)).toBe(0);
  });

  // power
  test('2 ^ 3 = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('5 ^ 0 = 1', () => {
    expect(calc.power(5, 0)).toBe(1);
  });

  test('2 ^ -1 = 0.5', () => {
    expect(calc.power(2, -1)).toBeCloseTo(0.5);
  });

  test('negative base with even exponent is positive', () => {
    expect(calc.power(-2, 2)).toBe(4);
  });

  // square root
  test('√16 = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('√0 = 0', () => {
    expect(calc.squareRoot(0)).toBe(0);
  });

  test('√2 is approximately 1.414', () => {
    expect(calc.squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('square root of negative number throws', () => {
    expect(() => calc.squareRoot(-1)).toThrow('Cannot take square root of negative number');
  });
});
