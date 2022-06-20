export const toFixedIfNeeded = (num: number, fractionDigits = 2) =>
  num % 1 !== 0 ? num.toFixed(fractionDigits) : Math.round(num).toString();
