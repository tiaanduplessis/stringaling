export const snakeCase = <T extends string>(str: T) =>
  str.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
