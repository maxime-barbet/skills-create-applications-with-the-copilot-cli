#!/usr/bin/env node

// Simple Node.js CLI calculator
// Supported operations:
//  - Addition: + or add
//  - Subtraction: - or sub
//  - Multiplication: * or x or mul
//  - Division: / or ÷ or div
// Usage: node src/calculator.js <operation> <number1> <number2>
// Examples:
//   node src/calculator.js + 1 2
//   node src/calculator.js mul 3 4

const [, , op, aRaw, bRaw] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations: + add | - sub | * x mul | / ÷ div');
}

if (!op || !aRaw || !bRaw) {
  printUsage();
  process.exit(1);
}

const a = Number(aRaw);
const b = Number(bRaw);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be numbers');
  process.exit(1);
}

function isDivisionOperator(o) {
  return o === '/' || o === '÷' || o.toLowerCase() === 'div';
}

let result;
switch (op) {
  case '+':
  case 'add':
    result = a + b;
    break;
  case '-':
  case 'sub':
  case 'subtract':
    result = a - b;
    break;
  case '*':
  case 'x':
  case 'X':
  case 'mul':
  case 'times':
    result = a * b;
    break;
  case '/':
  case '÷':
  case 'div':
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error('Error: unknown operation:', op);
    printUsage();
    process.exit(1);
}

console.log(result);
