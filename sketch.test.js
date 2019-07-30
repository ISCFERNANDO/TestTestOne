const { suma, substract } = require("./sketch");

test("Add 3 + 5 to 8", () => {
  expect(suma(3, 5)).toBe(8);
});

test("Substract 3 - 8 to -5", () => {
  expect(substract(3, 8)).toBe(-5);
});
