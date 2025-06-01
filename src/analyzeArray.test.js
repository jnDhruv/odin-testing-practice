import analyzeArray from "./analyzeArray";

test("exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("[1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("[0]", () => {
  expect(analyzeArray([0])).toStrictEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("[]", () => {
  expect(analyzeArray([])).toStrictEqual("Empty array");
});

test("['a',1,2]", () => {
  expect(analyzeArray(["a", 1, 2])).toStrictEqual(
    "Array has non-number elements"
  );
});
