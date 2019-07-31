const sum = 1;
const res = 1;
const mul = 1;
const div = 1;

function suma(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function allInOne(a, b, opc) {
  switch (opc) {
    case sum:
      return a + b;
    case res:
      return a - b;
    case mul:
      return a * b;
    case div:
      return a / b;
    default:
      return 0;
  }
}

module.exports = {
  suma,
  substract,
  product,
  division,
  allInOne
};
