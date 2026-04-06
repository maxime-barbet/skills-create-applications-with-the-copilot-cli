#!/usr/bin/env node

// Simple Node.js CLI calculator
// Supported operations:
//  - Addition: + or add
//  - Subtraction: - or sub
//  - Multiplication: * or x or mul
//  - Division: / or ÷ or div
//  - Modulo: % or mod
//  - Exponentiation: ^ or pow or power
//  - Square root: sqrt
// Usage:
//   node src/calculator.js <operation> <number1> <number2>
//   node src/calculator.js sqrt <number>
// Examples:
//   node src/calculator.js + 1 2
//   node src/calculator.js mul 3 4
//   node src/calculator.js % 10 3
//   node src/calculator.js pow 2 8
//   node src/calculator.js sqrt 9

const calc = require('./lib/calculator');
const [, , op, aRaw, bRaw] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('       node src/calculator.js sqrt <num>');
  console.log('Operations: + add | - sub | * x mul | / ÷ div | % mod | ^ pow | sqrt');
}

if (!op || !aRaw) {
  printUsage();
  process.exit(1);
}

const a = Number(aRaw);
const b = bRaw !== undefined ? Number(bRaw) : undefined;

if (op === 'sqrt' || op === '√') {
  if (Number.isNaN(a)) {
    console.error('Error: operand must be a number');
    process.exit(1);
  }
  try {
    const result = calc.squareRoot(a);
    console.log(result);
    process.exit(0);
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

if (b === undefined || Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be numbers for this operation');
  printUsage();
  process.exit(1);
}

let result;
switch (op) {
  case '+':
  case 'add':
    result = calc.add(a, b);
    break;
  case '-':
  case 'sub':
  case 'subtract':
    result = calc.sub(a, b);
    break;
  case '*':
  case 'x':
  case 'X':
  case 'mul':
  case 'times':
    result = calc.mul(a, b);
    break;
  case '/':
  case '÷':
  case 'div':
    try {
      result = calc.div(a, b);
    } catch (e) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    break;
  case '%':
  case 'mod':
    result = calc.modulo(a, b);
    break;
  case '^':
  case 'pow':
  case 'power':
    result = calc.power(a, b);
    break;
  default:
    console.error('Error: unknown operation:', op);
    printUsage();
    process.exit(1);
}

console.log(result);
