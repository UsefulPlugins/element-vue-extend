const toString = Object.prototype.toString;

function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

function isNumber(val: unknown): val is number {
  return is(val, "Number");
}

export { is, isNumber };
