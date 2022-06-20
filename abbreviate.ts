/**
 * Create a string that is the abbreviated version of the given string. Using capital letters and seperated by word boundaries.
 * @param str String to to abbreviate
 */
export const abbreviate = <T extends string>(str: T, maxLength?: number) => {
  const result = str.match(/\b([A-Z])/g);
  const value = result ? result.join("") : str.toUpperCase();
  return maxLength ? value.slice(0, maxLength) : value;
};
