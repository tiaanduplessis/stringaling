/**
 * Count the number of times a substring occurs within a string.
 * @param str String to check
 * @param substr Substring to count
 */
export const count = (str: string | undefined, substr: string) => {
  if (!str) return 0;
  return str.split(substr).length - 1;
};
