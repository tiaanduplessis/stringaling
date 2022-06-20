/**
 * Ensure a given suffix is present in a string.
 * @param suffix Suffix
 * @param str String to check
 */
export const ensureSuffix = <T extends string>(str: T, suffix: T) =>
  !str.endsWith(suffix) ? `${str}${suffix}` : str;
