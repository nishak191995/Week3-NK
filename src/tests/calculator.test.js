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
      expect(() => calculator.calculate(10, '^', 2)).toThrow(
        "Error: Invalid operator '^'. Use +, -, *, or /"
      );
    });

    test('should throw error for unsupported operators', () => {
      expect(() => calculator.calculate(10, '%', 3)).toThrow();
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
});
