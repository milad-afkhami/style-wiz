import type TextProps from "@components/Text/props";

/** helps to set font size variable */
export default function fontSizeVar(size?: TextProps["size"]): string {
  if (!size) return "";

  /**
   * existence of a "." or "()" characters in variable name will mark whole value as "invalid" in CSS
   * and in that situation, second parameter of var function(fallback value) won't work.
   * so we have to make an exception for values like "2.5rem" and var(...)
   */
  const dotOrParenthesesRegExp = /\.|\(/;
  const isStaticFont = dotOrParenthesesRegExp.test(size);

  const fontSize = isStaticFont ? size : `var(--font-size-${size}, ${size})`;

  return fontSize;
}
