import calculator from "./calculator.js";

test("exists", () => {
  expect(calculator).toBeDefined();
});

test("returns an object", () => {
  expect(typeof calculator).toBe("object");
});

describe("Addition", () => {
  test("1,2 returns 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("1,-2 returns -1", () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("no args", () => {
    expect(calculator.add()).toBe("Invalid input");
  });

  test("args not Number", () => {
    expect(calculator.add("1", 2)).toBe("Invalid input");
  });
});

describe("Subtraction", () => {
  test("1,2 returns -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("1,-2 returns 3", () => {
    expect(calculator.subtract(1, -2)).toBe(3);
  });

  test("no args", () => {
    expect(calculator.subtract()).toBe("Invalid input");
  });

  test("args not Number", () => {
    expect(calculator.subtract("1", 2)).toBe("Invalid input");
  });
});

describe("Multiplication", () => {
  test("1,2 returns 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("1,-2 returns -2", () => {
    expect(calculator.multiply(1, 0)).toBe(0);
  });

  test("no args", () => {
    expect(calculator.multiply()).toBe("Invalid input");
  });

  test("args not Number", () => {
    expect(calculator.multiply("1", 2)).toBe("Invalid input");
  });
});

describe("Division", () => {
  test("1,2 returns 0.5", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("1,-2 returns -2", () => {
    expect(calculator.divide(1, 0)).toBe("Cannot divide by zero");
  });

  test("no args", () => {
    expect(calculator.divide()).toBe("Invalid input");
  });

  test("args not Number", () => {
    expect(calculator.divide("1", 2)).toBe("Invalid input");
  });
});
