import __reduce from "lodash/reduce";
import CSSVariableHelper from "@helpers/cssVar";
import type DivProps from "@components/Div/props";

type Dimensions = NonNullable<DivProps["dimensions"]>;

/**
 * @description
 * Accepts the `dimensions` prop from `Div` kit
 * and invokes the spacingVar method on its values
 *
 * @example
 * prepareDimensions({ top: 1, right: 2, bottom: 3, left: 4 });
 * // returns =>
 * {
 *   top: "var(--spacing-1)",
 *   right: "var(--spacing-2)",
 *   bottom: "var(--spacing-3)",
 *   left: "var(--spacing-4)"
 * }
 */
export default function prepareDimensions(d: Dimensions) {
  return __reduce(
    d,
    (result, v, k) => {
      const value = CSSVariableHelper.spacing(v);
      // eslint-disable-next-line no-param-reassign
      result[k as keyof Dimensions] = value;
      return result;
    },
    {} as Record<keyof Dimensions, string>
  );
}
