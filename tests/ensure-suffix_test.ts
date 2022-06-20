import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { ensureSuffix } from "../ensure-suffix.ts";

Deno.test("ensure-suffix", () => {
  assertEquals(ensureSuffix("foo", "end"), "fooend");
  assertEquals(ensureSuffix("fooend", "end"), "fooend");
});
