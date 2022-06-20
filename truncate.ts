/**
 * Truncate a string to a given length.
 * @param str String to truncate
 * @param maxLength Maximum length of string
 * @param append Append for truncated string
 */
export const truncate = <T extends string>(
  str: T,
  maxLength: number,
  append = "\u2026",
) =>
  str.length > maxLength
    ? str.substring(0, maxLength - append.length) + append
    : str;
