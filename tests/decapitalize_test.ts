import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { decapitalize } from "../decapitalize.ts";

Deno.test("decapitalize", () => {
  assertEquals(decapitalize("foo bar baz"), "foo bar baz");
  assertEquals(decapitalize("Foo bar baz"), "foo bar baz");
  assertEquals(decapitalize("Foo Bar Baz"), "foo Bar Baz");
});
