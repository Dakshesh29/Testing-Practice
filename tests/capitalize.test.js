import { capitalize } from "../code-modules/capitalize.js";

test("properly Working", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns an empty string if input is empty", () => {
  expect(capitalize("")).toBe("");
});
