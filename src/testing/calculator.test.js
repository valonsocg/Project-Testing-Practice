import calculator from "./calculator";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts two numbers", () => {
    expect(calculator.substract(1, 2)).toBe(-1);
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
});
