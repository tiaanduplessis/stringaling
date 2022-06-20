// @ts-ignore
import { camelCase } from "./camel-case.ts";
// @ts-ignore
import { capitalize } from "./capitalize.ts";

export const pascalCase = <T extends string>(str: T) =>
  capitalize(camelCase(str));
