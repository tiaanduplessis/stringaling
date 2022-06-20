import { assertArrayIncludes } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { words } from "../words.ts";

Deno.test("words", () => {
  assertArrayIncludes(words("foo bar baz"), ["foo", "bar", "baz"]);
});
