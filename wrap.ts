/**
 * Wrap a string
 * @param str String to check
 * @param prefix String to wrap string with
 * @param suffix String to wrap the string with
 */
export const wrap = <T extends string>(str: T, prefix: string, suffix?: T) =>
  `${prefix}${str}${suffix || prefix}`;
