import CSSVariableHelper from "@helpers/cssVar";
import type DivProps from "@components/Div/props";

type Dimensions = NonNullable<DivProps["dimensions"]>;

type PreparedDimensions = Record<
  keyof Dimensions,
  ReturnType<typeof CSSVariableHelper.spacing>
>;

/**
 * @description
 * Accepts the `dimensions` prop from `Div` kit
 * and invokes the spacingVar method on its values
 *
 * @example
 * prepareDimensions({ top: 1, right: 2, bottom: 3, left: 4 });
 * // returns =>
 * {
 *   top: "var(--spacing-1, 1)",
 *   right: "var(--spacing-2, 2)",
 *   bottom: "var(--spacing-3, 3)",
 *   left: "var(--spacing-4, 4)"
 * }
 */
export default function prepareDimensions(d: Dimensions) {
  return Object.keys(d).reduce((result, k) => {
    const value = CSSVariableHelper.spacing(d[k as keyof Dimensions]);
    result[k as keyof Dimensions] = value;
    return result;
  }, {} as PreparedDimensions);
}
