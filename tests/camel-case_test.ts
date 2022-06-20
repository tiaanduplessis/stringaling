import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { camelCase } from "../camel-case.ts";

Deno.test("camel-case", () => {
  assertEquals(camelCase("Foo Bar Baz"), "fooBarBaz");
  assertEquals(camelCase("Foo BarBaz"), "fooBarBaz");
  assertEquals(camelCase("Foo Bar Baz"), "fooBarBaz");
  assertEquals(camelCase("this is a test"), "thisIsATest");
});
