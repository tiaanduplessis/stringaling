/**
 * Ensure a given prefix is present in a string.
 * @param prefix Prefix
 * @param str String to check
 */
export const ensurePrefix = <T extends string>(str: T, prefix: T) =>
  !str.startsWith(prefix) ? `${prefix}${str}` : str;
