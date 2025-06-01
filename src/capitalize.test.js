import capitalize from "./capitalize";

test("exists", () => {
  expect(capitalize).toBeDefined();
});

test("converts 'hello' to 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("converts 'world' to 'World'", () => {
  expect(capitalize("world")).toBe("World");
});

test("string with multiple words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("converts '1234' to '1234'", () => {
  expect(capitalize("1234")).toBe("1234");
});

test("converts 'TEST' to 'TEST'", () => {
  expect(capitalize("TEST")).toBe("TEST");
});