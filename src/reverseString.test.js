import reverseString from "./reverseString";

test("exists", () => {
  expect(reverseString).toBeDefined;
});

test("converts 'hello' to 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("converts 'world' to 'dlrow'", () => {
  expect(reverseString("world")).toBe("dlrow");
});

test("string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("string with symbols and numbers", () => {
  expect(reverseString("(@$$$)")).toBe(")$$$@(");
});