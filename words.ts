export const words = <T extends string>(
  str: T,
  delimiter: RegExp | string = /\s+/,
) => str.trim().split(delimiter);
