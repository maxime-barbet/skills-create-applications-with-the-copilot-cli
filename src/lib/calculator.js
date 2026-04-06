/**
 * Calculator library with basic operations
 * Supported operations:
 *  - add(a, b): addition
 *  - sub(a, b): subtraction
 *  - mul(a, b): multiplication
 *  - div(a, b): division (throws on division by zero)
 */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, sub, mul, div };
