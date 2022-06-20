import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { snakeCase } from "../snake-case.ts";

Deno.test("snake-case", () => {
  assertEquals(snakeCase("foo"), "foo");
  assertEquals(snakeCase("foo bar"), "foo_bar");
  assertEquals(snakeCase("Foo Bar Baz"), "foo_bar_baz");
});
