// @ts-ignore
import { addSeperator } from "./add-seperator.ts";
// @ts-ignore
import { toFixedIfNeeded } from "./to-fixed-if-needed.ts";

export const formatNum = (
  num?: number,
  fixed?: number,
  decimalSeperator = ".",
  orderSeparator = " ",
  fallback = "",
) => {
  if (!num || !isFinite(num) || Number.isNaN(num)) return fallback;
  const val = toFixedIfNeeded(num, fixed).replace(".", decimalSeperator);
  return addSeperator(val, 3, orderSeparator);
};
