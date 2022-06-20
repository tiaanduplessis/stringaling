import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { capitalize } from "../capitalize.ts";

Deno.test("capitalize", () => {
  assertEquals(capitalize("foo Bar Baz"), "Foo Bar Baz");
  assertEquals(capitalize("Foo Bar Baz", true), "Foo bar baz");
});
