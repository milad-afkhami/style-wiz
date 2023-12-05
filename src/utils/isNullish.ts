import type { Nullish } from "ts-wiz";

export default function isNullish(value: unknown): value is Nullish {
  return typeof value === "undefined" || value === null;
}
