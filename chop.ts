export const chop = <T extends string>(str: T, size: number) => {
  return size > 0
    ? str.match(new RegExp(`.{1,${size}}`, "g")) as string[]
    : [str];
};
