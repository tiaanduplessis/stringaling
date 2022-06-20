import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { truncate } from "../truncate.ts";

Deno.test("truncate", () => {
  assertEquals(truncate("foobarbaz", 4), "foo…");
});
