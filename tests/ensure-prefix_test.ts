import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { ensurePrefix } from "../ensure-prefix.ts";

Deno.test("ensure-prefix", () => {
  assertEquals(ensurePrefix("foo", "the "), "the foo");
  assertEquals(ensurePrefix("the foo", "the "), "the foo");
});
