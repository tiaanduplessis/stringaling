/**
 * Capitalize the first letter of a string.
 * @param str String to capitalize
 */
export const capitalize = <T extends string>(
  str: T,
  restToLower = false,
) => {
  const base = restToLower ? str.toLowerCase() : str;
  return `${base.charAt(0).toUpperCase()}${base.slice(1)}`;
};
