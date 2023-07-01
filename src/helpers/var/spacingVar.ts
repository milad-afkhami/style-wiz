/** helps to set spacing variable */
export default function spacingVar(spacing?: Spacings): string {
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
