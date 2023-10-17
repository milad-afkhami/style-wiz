import CSSVariableHelper from "../helpers/cssVar";
import type DivProps from "../components/Div/props";
import type { Spacings } from "../typings/stylesheets";
import type { Maybe, Dictionary } from "ts-wiz";

// prettier-ignore
type SpacingKeys = "mr" | "ml" | "mEnd" | "mStart" | "mt" | "mb" | "mx" | "my" | "pr" | "pl" | "pEnd" | "pStart" | "pt" | "pb" | "px" | "py";

type SpacingProps = Array<{ key: SpacingKeys; properties: Array<string> }>;

// read more about css logical properties here https://codepen.io/aardrian/pen/bGGxrvM
const spacingPropsMap: SpacingProps = [
  { key: "mr", properties: ["margin-right"] },
  { key: "ml", properties: ["margin-left"] },
  { key: "mEnd", properties: ["margin-inline-end"] },
  { key: "mStart", properties: ["margin-inline-start"] },
  { key: "mt", properties: ["margin-top"] },
  { key: "mb", properties: ["margin-bottom"] },
  { key: "mx", properties: ["margin-left", "margin-right"] },
  { key: "my", properties: ["margin-top", "margin-bottom"] },
  { key: "pr", properties: ["padding-right"] },
  { key: "pl", properties: ["padding-left"] },
  { key: "pEnd", properties: ["padding-inline-end"] },
  { key: "pStart", properties: ["padding-inline-start"] },
  { key: "pt", properties: ["padding-top"] },
  { key: "pb", properties: ["padding-bottom"] },
  { key: "px", properties: ["padding-left", "padding-right"] },
  { key: "py", properties: ["padding-top", "padding-bottom"] },
];

/** this method will check the object passed to it and if there was any of the spacingProps object keys in it, it will translate that to correct style property. */
export default function getOtherSpacings(
  props: Pick<DivProps, SpacingKeys> = {}
) {
  // filter passed props that are from spacingProps keys
  const passedSpacingProps = spacingPropsMap.filter(
    ({ key }) => props[key] !== undefined
  );

  return passedSpacingProps.reduce((css, { key, properties }) => {
    properties.forEach((cssProperty) => {
      const spacingKey: Maybe<Spacings> = props[key];
      if (spacingKey) {
        const cssValue = CSSVariableHelper.spacing(spacingKey);
        // eslint-disable-next-line no-param-reassign
        css[cssProperty] = cssValue;
      }
    });
    return css;
  }, {} as Dictionary<string>);
}
