import type TextProps from "@components/Text/props";
import type { Spacings, Colors } from "@typings/stylesheets";

export default class CSSVariableHelper {
  /** helps to prepare a css color variable */
  static color(color: Colors): string {
    if (!color) return "";

    /**
     * from benchmark POV, one RegExp.test call takes less executing time than three String.includes calls
     *
     * static color names are also supported
     *
     * var(--color-red, red) : there is no --color-red variable so it will fallback to second parameter(red)
     */
    const isStaticColor = /^(rgb|#|var\().*/.test(color);

    return isStaticColor ? color : `var(--color-${color}, ${color})`;
  }

  /** helps to prepare a css font size variable */
  static fontSize(size?: TextProps["size"]): string {
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

  /** helps to prepare an spacing related css variable */
  static spacing(spacing?: Spacings): string {
    if (spacing === 0) return "0px";
    if (!spacing) return "";
    const _spacing = `${spacing}`;

    /**
     * existence of a "." or "()" characters in variable name will mark whole value as "invalid" in CSS
     * and in that situation, second parameter of var function(fallback value) won't work.
     * so we have to make an exception for values like "2.5rem" and var(...)
     */
    const staticValuesRegExp = /\.|\(|%/;
    const isStaticSpacing = staticValuesRegExp.test(_spacing);

    const resolvedSpacing = isStaticSpacing
      ? _spacing
      : `var(--spacing-${_spacing}, ${_spacing})`;

    return resolvedSpacing;
  }
}
