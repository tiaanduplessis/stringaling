import { assertArrayIncludes } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { chars } from "../chars.ts";

Deno.test("chars", () => {
  assertArrayIncludes(chars("foo"), ["f", "o", "o"]);
});
