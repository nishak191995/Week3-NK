const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition (+)', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add numbers from image example: 2 + 3', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -5)).toBe(5);
      expect(calculator.add(-10, 5)).toBe(-5);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add zero to zero', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(2.5, 3.5)).toBe(6);
      expect(calculator.add(1.1, 2.2)).toBeCloseTo(3.3);
    });

    test('should add large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction (-)', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract numbers from image example: 10 - 4', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract and get negative result', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from zero', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract identical numbers', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
      expect(calculator.subtract(10.1, 3.2)).toBeCloseTo(6.9);
    });
  });

  describe('Multiplication (*)', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply numbers from image example: 45 * 2', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 10)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(7, 1)).toBe(7);
      expect(calculator.multiply(1, 9)).toBe(9);
    });

    test('should multiply negative numbers', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
      expect(calculator.multiply(-5, 3)).toBe(-15);
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
      expect(calculator.multiply(1.5, 2.5)).toBeCloseTo(3.75);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractional numbers', () => {
      expect(calculator.multiply(0.5, 4)).toBe(2);
    });
  });

  describe('Division (/)', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide numbers from image example: 20 / 5', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide with remainder', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide negative numbers', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
      expect(calculator.divide(10, -2)).toBe(-5);
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide by one', () => {
      expect(calculator.divide(7, 1)).toBe(7);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(10.5, 2)).toBeCloseTo(5.25);
      expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test('should return zero when dividing zero', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        'Error: Division by zero is not allowed'
      );
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow(
        'Error: Division by zero is not allowed'
      );
    });

    test('should throw error for very small divisors approaching zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow();
    });
  });

  describe('calculate() method', () => {
    test('should perform addition via calculate method', () => {
      expect(calculator.calculate(2, '+', 3)).toBe(5);
    });

    test('should perform subtraction via calculate method', () => {
      expect(calculator.calculate(10, '-', 4)).toBe(6);
    });

    test('should perform multiplication via calculate method', () => {
      expect(calculator.calculate(45, '*', 2)).toBe(90);
    });

    test('should perform division via calculate method', () => {
      expect(calculator.calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculator.calculate(10, '&', 2)).toThrow(
        "Error: Invalid operator '&'. Use +, -, *, /, %, or ^"
      );
    });

    test('should throw error for unsupported operators', () => {
      expect(() => calculator.calculate(10, '**', 2)).toThrow();
      expect(() => calculator.calculate(10, '÷', 2)).toThrow();
    });

    test('should handle all image examples correctly', () => {
      expect(calculator.calculate(2, '+', 3)).toBe(5);
      expect(calculator.calculate(10, '-', 4)).toBe(6);
      expect(calculator.calculate(45, '*', 2)).toBe(90);
      expect(calculator.calculate(20, '/', 5)).toBe(4);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers', () => {
      expect(calculator.add(1000000000, 1000000000)).toBe(2000000000);
    });

    test('should handle very small numbers', () => {
      expect(calculator.divide(0.0001, 10)).toBeCloseTo(0.00001);
    });

    test('should handle chained operations', () => {
      const step1 = calculator.add(5, 5);
      const step2 = calculator.multiply(step1, 2);
      const step3 = calculator.divide(step2, 4);
      expect(step3).toBe(5);
    });

    test('should maintain calculator state across operations', () => {
      calculator.add(1, 2);
      calculator.multiply(3, 4);
      expect(calculator.add(5, 5)).toBe(10);
    });
  });

  describe('Modulo (%)', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo from image example: 5 % 2', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger dividends', () => {
      expect(calculator.modulo(17, 5)).toBe(2);
      expect(calculator.modulo(20, 3)).toBe(2);
    });

    test('should calculate modulo where dividend is smaller than divisor', () => {
      expect(calculator.modulo(3, 5)).toBe(3);
      expect(calculator.modulo(2, 10)).toBe(2);
    });

    test('should calculate modulo with zero dividend', () => {
      expect(calculator.modulo(0, 5)).toBe(0);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(calculator.modulo(-5, 2)).toBe(-1);
      expect(calculator.modulo(5, -2)).toBe(1);
      expect(calculator.modulo(-5, -2)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(calculator.modulo(5.5, 2)).toBeCloseTo(1.5);
      expect(calculator.modulo(10.7, 3)).toBeCloseTo(1.7);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow(
        'Error: Modulo by zero is not allowed'
      );
    });

    test('should throw error when modulo zero by zero', () => {
      expect(() => calculator.modulo(0, 0)).toThrow(
        'Error: Modulo by zero is not allowed'
      );
    });
  });

  describe('Power (^)', () => {
    test('should calculate power of two numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power from image example: 2 ^ 3', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with positive exponents', () => {
      expect(calculator.power(5, 2)).toBe(25);
      expect(calculator.power(3, 4)).toBe(81);
      expect(calculator.power(10, 3)).toBe(1000);
    });

    test('should calculate power with zero exponent', () => {
      expect(calculator.power(5, 0)).toBe(1);
      expect(calculator.power(100, 0)).toBe(1);
      expect(calculator.power(0, 0)).toBe(1);
    });

    test('should calculate power with exponent of one', () => {
      expect(calculator.power(7, 1)).toBe(7);
      expect(calculator.power(-5, 1)).toBe(-5);
    });

    test('should calculate power with negative exponents', () => {
      expect(calculator.power(2, -1)).toBe(0.5);
      expect(calculator.power(10, -2)).toBe(0.01);
      expect(calculator.power(5, -1)).toBe(0.2);
    });

    test('should calculate power with negative base', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
      expect(calculator.power(-3, 2)).toBe(9);
      expect(calculator.power(-5, 4)).toBe(625);
    });

    test('should calculate power with decimal base and exponent', () => {
      expect(calculator.power(2.5, 2)).toBeCloseTo(6.25);
      expect(calculator.power(1.5, 3)).toBeCloseTo(3.375);
    });

    test('should calculate large powers', () => {
      expect(calculator.power(2, 10)).toBe(1024);
      expect(calculator.power(10, 6)).toBe(1000000);
    });

    test('should calculate fractional powers (roots)', () => {
      expect(calculator.power(16, 0.5)).toBe(4);
      expect(calculator.power(8, 1 / 3)).toBeCloseTo(2);
    });
  });

  describe('Square Root (√)', () => {
    test('should calculate square root of perfect squares', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root from image example: √16', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of other perfect squares', () => {
      expect(calculator.squareRoot(25)).toBe(5);
      expect(calculator.squareRoot(36)).toBe(6);
      expect(calculator.squareRoot(100)).toBe(10);
      expect(calculator.squareRoot(144)).toBe(12);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 2);
      expect(calculator.squareRoot(3)).toBeCloseTo(1.732, 2);
      expect(calculator.squareRoot(5)).toBeCloseTo(2.236, 2);
      expect(calculator.squareRoot(10)).toBeCloseTo(3.162, 2);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
      expect(calculator.squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of large numbers', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-1)).toThrow(
        'Error: Cannot calculate square root of a negative number'
      );
      expect(() => calculator.squareRoot(-4)).toThrow(
        'Error: Cannot calculate square root of a negative number'
      );
      expect(() => calculator.squareRoot(-100)).toThrow(
        'Error: Cannot calculate square root of a negative number'
      );
    });
  });

  describe('calculate() with advanced operators', () => {
    test('should perform modulo via calculate method', () => {
      expect(calculator.calculate(5, '%', 2)).toBe(1);
    });

    test('should perform power via calculate method', () => {
      expect(calculator.calculate(2, '^', 3)).toBe(8);
    });

    test('should handle all image examples correctly', () => {
      expect(calculator.calculate(5, '%', 2)).toBe(1);
      expect(calculator.calculate(2, '^', 3)).toBe(8);
    });

    test('should throw error for unsupported advanced operators', () => {
      expect(() => calculator.calculate(10, '√', 2)).toThrow();
      expect(() => calculator.calculate(10, 'sqrt', 2)).toThrow();
    });
  });

  describe('Advanced Edge Cases', () => {
    test('should handle modulo with repeated operations', () => {
      const step1 = calculator.modulo(17, 5);
      expect(step1).toBe(2);
      const step2 = calculator.modulo(step1, 2);
      expect(step2).toBe(0);
    });

    test('should handle power with chained operations', () => {
      const step1 = calculator.power(2, 3);
      expect(step1).toBe(8);
      const step2 = calculator.add(step1, 1);
      expect(step2).toBe(9);
      const step3 = calculator.squareRoot(step2);
      expect(step3).toBe(3);
    });

    test('should handle combined arithmetic and advanced operations', () => {
      const step1 = calculator.add(2, 2);
      const step2 = calculator.modulo(step1, 3);
      const step3 = calculator.power(step2, 2);
      expect(step3).toBe(1);
    });

    test('should handle very large power calculations', () => {
      expect(calculator.power(2, 20)).toBe(1048576);
    });

    test('should handle very small power results', () => {
      const result = calculator.power(10, -10);
      expect(result).toBeCloseTo(0.0000000001, 10);
    });

    test('should maintain precision in square root calculations', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.41421356237, 8);
    });
  });
});
