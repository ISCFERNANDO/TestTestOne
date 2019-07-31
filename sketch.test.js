const { suma, substract, division, product, allInOne, toLower } = require("./sketch");

test("Add 3 + 5 to 8", () => {
  expect(suma(3, 5)).toBe(8);
});

test("Substract 3 - 8 to -5", () => {
  expect(substract(3, 8)).toBe(-5);
});

test("Division 3 / 5 to 0.6", () => {
  expect(division(3, 5)).toBe(0.6);
});

test("Producto 3 * 5 to 15", () => {
  expect(product(3, 5)).toBe(15);
});

test("All in one Producto 3 * 5 to 15", () => {
  //suma
  expect(allInOne(3, 5, 3)).toBe(15);
});

test("South string to lower case", () => {
  expect(toLower("Luis Fernando")).toEqual("luis fernando");
});
