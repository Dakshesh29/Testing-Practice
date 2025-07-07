import { reverseString } from "../code-modules/reverseString.js";

test("reversing a word", () => {
  expect(reverseString("hello")).toBe("olleh");
});
