import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { count } from "../count.ts";

Deno.test("count", () => {
  assertEquals(count("foofoofoo", "foo"), 3);
  assertEquals(count("Foo Bar Baz", "Bar"), 1);
});
