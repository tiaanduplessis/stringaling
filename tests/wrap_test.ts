import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { wrap } from "../wrap.ts";

Deno.test("wrap", () => {
  assertEquals(wrap("foo", '"'), `"foo"`);
  assertEquals(wrap("foo", "(", ")"), `(foo)`);
});
