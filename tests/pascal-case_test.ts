import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { pascalCase } from "../pascal-case.ts";

Deno.test("pascal-case", () => {
  assertEquals(pascalCase("foo"), "Foo");
  assertEquals(pascalCase("fooBar"), "FooBar");
  assertEquals(pascalCase("foo bar baz"), "FooBarBaz");
});
