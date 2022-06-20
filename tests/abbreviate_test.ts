import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { abbreviate } from "../abbreviate.ts";

Deno.test("abbreviate", () => {
  assertEquals(abbreviate("Foo Bar Baz"), "FBB");
  assertEquals(abbreviate("foobarbaz", 3), "FOO");
});
