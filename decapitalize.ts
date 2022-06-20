/**
 * Converts first letter of a string to lowercase.
 * @param str String to decapitalize
 */
export const decapitalize = <T extends string>(str: T) =>
  str.charAt(0).toLowerCase() + str.slice(1);
