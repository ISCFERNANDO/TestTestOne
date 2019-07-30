const suma = require("./sketch");

test("Add 3 + 5 to 8", () => {
  expect(suma(3, 5)).toBe(8);
});
