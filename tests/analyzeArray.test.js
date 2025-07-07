import { analyzeArray } from "../code-modules/analyzeArray.js";

describe("analyzeArray module", () => {
  const array = [1, 8, 3, 4, 2, 6];

  test("calculates average correctly", () => {
    expect(analyzeArray.average(array)).toBe(4);
  });

  test("finds minimum value", () => {
    expect(analyzeArray.min(array)).toBe(1);
  });

  test("finds maximum value", () => {
    expect(analyzeArray.max(array)).toBe(8);
  });

  test("calculates array length", () => {
    expect(analyzeArray.length(array)).toBe(6);
  });
});
