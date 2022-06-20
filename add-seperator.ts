export const addSeperator = <T extends string>(
  numStr: T,
  interval = 3,
  sep = " ",
) => {
  const pattern = new RegExp(`\\B(?=(\\d{${interval}})+(?!\\d))`, "g");
  return numStr.replace(pattern, sep);
};
