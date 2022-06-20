import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { addSeperator } from "../add-seperator.ts";

Deno.test("add-seperator", () => {
  assertEquals(addSeperator("1000"), "1 000");
  assertEquals(addSeperator("1000000"), "1 000 000");
  assertEquals(addSeperator("1000", 2), "10 00");
  assertEquals(addSeperator("1000", 3, "_"), "1_000");
});
