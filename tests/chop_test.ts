import { assertArrayIncludes } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { chop } from "../chop.ts";

Deno.test("chop", () => {
  assertArrayIncludes(chop("foobarbaz", 3), ["foo", "bar", "baz"]);
  assertArrayIncludes(chop("foobarbaz", 6), ["foobar", "baz"]);
});
