import { calculator } from "../code-modules/calculator.js";

describe("calculator", () => {
  test("adds two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  test("subtracts two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
  });

  test("multiplies two numbers correctly", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 3)).toBe(0);
  });

  test("divides two numbers correctly", () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero!");
  });
});
