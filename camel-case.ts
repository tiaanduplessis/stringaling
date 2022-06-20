/**
 * Convert a string to camel case. (Based on https://stackoverflow.com/a/2970667/7027045)
 * @param str String to convert
 */
export const camelCase = <T extends string>(str: T) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
};
