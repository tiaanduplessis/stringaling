import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { formatNum } from "../format-num.ts";

Deno.test("format-num", () => {
  assertEquals(formatNum(5000, 2, ".", " "), "5 000");
  assertEquals(formatNum(5000.444, 2, ",", "-"), "5-000,44");
});
