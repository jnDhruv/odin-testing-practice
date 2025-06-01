import caesarCipher from "./caesarCipher";

test("exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("('abc', 3) to 'def'", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("('xyz', 3) to 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("('HeLLo', 3) to 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("('Hello, World!', 3) to 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
