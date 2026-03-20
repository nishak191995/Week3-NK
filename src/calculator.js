#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 * 
 * Usage: calculator.js <num1> <operator> <num2>
 * Example: node calculator.js 10 + 5
 */

class Calculator {
  /**
   * Addition: Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction: Subtracts second number from first
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication: Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division: Divides first number by second
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a and b
   * @throws {Error} If divisor is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Error: Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Modulo: Returns the remainder of a divided by b
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If divisor is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Error: Modulo by zero is not allowed');
    }
    return a % b;
  }

  /**
   * Power (Exponentiation): Raises base to the exponent
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Base raised to the exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square Root: Calculates the square root of a number
   * @param {number} n - Number to find square root of
   * @returns {number} Square root of n
   * @throws {Error} If number is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Error: Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }

  /**
   * Performs calculation based on operator
   * @param {number} num1 - First operand
   * @param {string} operator - Mathematical operator (+, -, *, /, %, ^)
   * @param {number} num2 - Second operand
   * @returns {number} Result of the calculation
   * @throws {Error} If operator is invalid
   */
  calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return this.add(num1, num2);
      case '-':
        return this.subtract(num1, num2);
      case '*':
        return this.multiply(num1, num2);
      case '/':
        return this.divide(num1, num2);
      case '%':
        return this.modulo(num1, num2);
      case '^':
        return this.power(num1, num2);
      default:
        throw new Error(`Error: Invalid operator '${operator}'. Use +, -, *, /, %, or ^`);
    }
  }

  /**
   * Performs square root calculation
   * @param {number} n - Number to find square root of
   * @returns {number} Square root of n
   * @throws {Error} If number is negative
   */
  calculateSquareRoot(n) {
    return this.squareRoot(n);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Node.js CLI Calculator');
    console.log('');
    console.log('Usage: calculator <number1> <operator> <number2>');
    console.log('       calculator sqrt <number>');
    console.log('');
    console.log('Supported Operations:');
    console.log('  + : Addition');
    console.log('  - : Subtraction');
    console.log('  * : Multiplication');
    console.log('  / : Division');
    console.log('  % : Modulo (remainder)');
    console.log('  ^ : Exponentiation (power)');
    console.log('');
    console.log('Examples:');
    console.log('  calculator 10 + 5');
    console.log('  calculator 20 - 3');
    console.log('  calculator 6 "*" 7');
    console.log('  calculator 100 / 4');
    console.log('  calculator 17 % 5');
    console.log('  calculator 2 "^" 8');
    console.log('  calculator sqrt 16');
    process.exit(0);
  }

  try {
    // Handle square root operation
    if (args[0] === 'sqrt') {
      if (args.length !== 2) {
        console.error('Error: sqrt requires exactly one argument');
        console.error('Usage: calculator sqrt <number>');
        process.exit(1);
      }

      const num = parseFloat(args[1]);
      if (isNaN(num)) {
        console.error('Error: Invalid number provided');
        process.exit(1);
      }

      const calculator = new Calculator();
      const result = calculator.calculateSquareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
      process.exit(0);
    }

    // Handle binary operations
    if (args.length !== 3) {
      console.error('Error: Invalid number of arguments');
      console.error('Usage: calculator <number1> <operator> <number2>');
      console.error('   or: calculator sqrt <number>');
      process.exit(1);
    }

    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
      console.error('Error: Invalid number(s) provided');
      process.exit(1);
    }

    const calculator = new Calculator();
    const result = calculator.calculate(num1, operator, num2);

    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = Calculator;
