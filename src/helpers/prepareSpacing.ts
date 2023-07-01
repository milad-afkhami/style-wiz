import spacingVar from "./var/spacingVar";
import type DivProps from "@components/Div/props";

interface PrepareSpacing {
  (param: NonNullable<DivProps["m"]>): Maybe<string>;
}

/**
 * Prepares spacing(margin and padding) for `convertPropsToStyle` method
 *
 * @example
 * prepareSpacing([1, 2, 3, 4]);
 * // => "0.25rem 0.5rem 1rem 1.5rem"
 * @example
 * prepareSpacing(["1", 2, 3, 4]);
 * // => "0.25rem 0.5rem 1rem 1.5rem"
 * @example
 * prepareSpacing(1);
 * // => "0.25rem 0.25rem 0.25rem 0.25rem"
 * @example
 * prepareSpacing("1");
 * // => "0.25rem 0.25rem 0.25rem 0.25rem"
 * @example
 * prepareSpacing(undefined);
 * // => undefined
 */
const prepareSpacing: PrepareSpacing = function (s) {
  let _s: NonNullable<Exclude<DivProps["m"], Spacings>>;
  const isString = typeof s === "string";
  const isNumber = typeof s === "number";
  const isArray = Array.isArray(s);
  const isArrayIncludingNumbers = isArray
    ? !s.every(($s) => typeof $s === "string")
    : false;
  if (isString) {
    _s = [s, s, s, s];
  } else if (isNumber) {
    _s = [`${s}`, `${s}`, `${s}`, `${s}`];
  } else if (isArrayIncludingNumbers) {
    // s: [1, "2", 3, "5"]
    _s = s.map(($s) => `${$s}`);
  } else {
    _s = s;
  }
  return _s ? `${_s.map(spacingVar).join(" ")}` : undefined;
};

export default prepareSpacing;
