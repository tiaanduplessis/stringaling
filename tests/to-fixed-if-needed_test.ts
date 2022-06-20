import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { toFixedIfNeeded } from "../to-fixed-if-needed.ts";

Deno.test("to-fixed-if-needed", () => {
  assertEquals(toFixedIfNeeded(500.10), "500.10");
  assertEquals(toFixedIfNeeded(500.00), "500");
});
