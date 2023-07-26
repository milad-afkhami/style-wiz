import type { Nullish } from "@typings/utilities";

export default function isNullish(value: unknown): value is Nullish {
  return typeof value === "undefined" || value === null;
}
