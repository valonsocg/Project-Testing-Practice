import analyzeArray from "./analyzeArray";

describe("Analize Array", () => {
  test("input must be an array", () => {
    expect(() => analyzeArray("asd")).toThrow("Input must be an Array!");
    expect(() => analyzeArray(123)).toThrow("Input must be an Array!");
    expect(() => analyzeArray({})).toThrow("Input must be an Array!");
  });

  test("analyze an empty array", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("average of the array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.average).toBe(4);
  });

  test("min of the array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.min).toBe(1);
  });

  test("max of the array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.max).toBe(8);
  });

  test("length of the array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.length).toBe(6);
  });
});
