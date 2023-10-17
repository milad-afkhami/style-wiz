import type { Nullishable } from "ts-wiz";

export default function capitalize(text: Nullishable<string>) {
  return [text?.charAt(0).toUpperCase(), text?.slice(1).toLowerCase()]
    .filter(Boolean)
    .join("");
}
