import { caesarCipher } from "../code-modules/caesarCipher.js";

test("shifts letters correctly", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("wraps from A to Z", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("wraps from z to a", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("ignores non-alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
