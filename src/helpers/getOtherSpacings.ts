import __reduce from "lodash/reduce";
import spacingVar from "@helpers/var/spacingVar";
import type DivProps from "@components/Div/props";

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

// type SpacingKeys = Exclude<ValueOf<typeof spacingProps>, Function | number | undefined>; type Spacings = Pick<DivProps, SpacingKeys>;
// prettier-ignore
type SpacingKeys = "mr" | "ml" | "mEnd" | "mStart" | "mt" | "mb" | "mx" | "my" | "pr" | "pl" | "pEnd" | "pStart" | "pt" | "pb" | "px" | "py";

/** this method will check the object passed to it and if there was any of the spacingProps object keys in it, it will translate that to correct style property. */
export default function getOtherSpacings(
  props: Pick<DivProps, SpacingKeys> = {}
) {
  return __reduce(
    spacingPropsMap.filter(({ key }) => props[key] !== undefined),
    (css, { key, properties }) => {
      properties.forEach((cssProperty) => {
        const spacingKey: Maybe<Spacings> = props[key];
        if (spacingKey) {
          const cssValue = spacingVar(spacingKey);
          // eslint-disable-next-line no-param-reassign
          css[cssProperty] = cssValue;
        }
      });
      return css;
    },
    {} as Dictionary<string>
  );
}
