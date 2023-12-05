import type { HTMLAttributes } from "react";
import type { CSSAttribute } from "goober";
import type {
  Spacings,
  Colors,
  Curves,
  Shadows,
  Paces,
} from "../../typings/stylesheets";
import type { Nullishable } from "../../typings/utilities";

type BorderSide =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "inlineStart"
  | "inlineEnd";
type Dimensions = {
  top?: Spacings;
  bottom?: Spacings;
  left?: Spacings;
  right?: Spacings;
  insetInlineStart?: Spacings;
  insetInlineEnd?: Spacings;
};
// type ResponsiveProps = DynamicDictionary<MediaFeatures, DivProps>;

// Flex/Grid
type FlexProps = [
  Nullishable<CSSAttribute["alignItems"]>,
  Nullishable<CSSAttribute["justifyContent"]>?,
  Nullishable<CSSAttribute["flexDirection"]>?,
  Nullishable<CSSAttribute["flexWrap"]>?
];
type GridProps = [
  Nullishable<CSSAttribute["gridTemplateColumns"]>,
  Nullishable<CSSAttribute["gridTemplateRows"]>?,
  Nullishable<Spacings>?,
  Nullishable<Spacings>?,
  Nullishable<CSSAttribute["gridAutoFlow"]>?,
  Nullishable<CSSAttribute["alignContent"]>?,
  Nullishable<CSSAttribute["justifyItems"]>?
];

export default interface DivProps extends HTMLAttributes<Element> {
  as?: unknown;
  /** represents css `width` property */
  width?: string;
  /** represents css `min-width` property */
  mw?: string;
  /** represents css `max-width` property */
  Mw?: string;
  /** represents css `height` property */
  height?: string;
  /** represents css `min-height` property */
  mh?: string;
  /** represents css `max-height` property */
  Mh?: string;
  /** makes scrollbar hides for current element */
  hiddenScrollbar?: boolean;
  /** makes scrollbar thin for current element */
  thinScrollbar?: boolean;
  /** makes scrollbar thick for current element */
  thickScrollbar?: boolean;
  /** match dimensions of parent element */
  matchParent?: boolean;
  /** controls radius of the element */
  curve?: Curves;
  /** controls shadow of the element */
  shadow?: Shadows;
  /** controls transition of the element */
  pace?: Paces;
  /** controls border color
   *
   * sets border-width to 1px if no borderW provided */
  border?: Colors;
  /** controls border side
   *
   * default is `""` which causes border to render for all sides. */
  borderSide?: BorderSide;
  /** represents border-width property
   *
   * default is `"1px"` */
  borderW?: string;
  /** controls background color of the element */
  bg?: Colors;
  /** represent css `background-image` property */
  bgImage?: string;
  /** controls text color of the element */
  color?: Colors;
  /** represent css `opacity` property */
  opacity?: number | string;
  /** controls background color of the element when hovered */
  hoverBg?: Colors;
  /** controls text color of the element when hovered */
  hoverColor?: Colors;
  /** controls shadow of the element when hovered */
  hoverShadow?: Shadows;
  /** controls margin of the element */
  m?: Spacings | Array<Spacings>;
  /** controls start margin of the element */
  mStart?: Spacings;
  /** controls end margin of the element */
  mEnd?: Spacings;
  /** controls horizontal margin of the element */
  mx?: Spacings;
  /** controls vertical margin of the element */
  my?: Spacings;
  /** controls top margin of the element */
  mt?: Spacings;
  /** controls bottom margin of the element */
  mb?: Spacings;
  /** controls right margin of the element */
  mr?: Spacings;
  /** controls left margin of the element */
  ml?: Spacings;
  /** controls padding of the element */
  p?: Spacings | Array<Spacings>;
  /** controls start padding of the element */
  pStart?: Spacings;
  /** controls end padding of the element */
  pEnd?: Spacings;
  /** controls horizontal padding of the element */
  px?: Spacings;
  /** controls vertical padding of the element */
  py?: Spacings;
  /** controls top padding of the element */
  pt?: Spacings;
  /** controls bottom padding of the element */
  pb?: Spacings;
  /** controls right padding of the element */
  pr?: Spacings;
  /** controls left padding of the element */
  pl?: Spacings;
  /** controls flex of the element
   *
   * an array containing these elements
   *
   * 0: align-items
   *
   * 1: justify-content
   *
   * 2: flex-direction
   *
   * 3: flex-wrap
   *
   * @example
   * flex={["start", "end, "column", "no-wrap"]}
   */
  flex?: FlexProps;
  /** represents css `flex` property */
  flexPortion?: CSSAttribute["flex"];
  display?: CSSAttribute["display"];
  /** controls flex gap of the element */
  gap?: Spacings;
  /** represents css `overflow` property */
  overflow?: CSSAttribute["overflow"];
  /** represents css `overflow-x` property */
  overflowX?: CSSAttribute["overflowX"];
  /** represents css `overflow-y` property */
  overflowY?: CSSAttribute["overflowY"];
  /** represents css `cursor` property */
  cursor?: CSSAttribute["cursor"];
  /** represents css `position` property */
  position?: CSSAttribute["position"];
  /** controls dimensions of and absolutely/relatively positioned element */
  dimensions?: Dimensions;
  /** represents css `z-index` property */
  zIndex?: CSSAttribute["zIndex"];
  /** represents css `order` property */
  order?: CSSAttribute["order"];
  /**
   * Controls rotation of an element
   *
   * [x]q === x * 90deg */
  rotate?: "1q" | "2q" | "3q" | "-1q" | "-2q" | "-3q" | number;
  /**
   * controls grid of the element
   *
   * an array containing these elements
   *
   * 0: grid-template-columns
   *
   * 1: grid-template-rows
   *
   * 2: column-gap
   *
   * 3: row-gap
   *
   * 4: grid-auto-flow
   *
   * 5: align-content
   *
   * 6: justify-items
   */
  grid?: GridProps;
  /** represents html `style` prop, except it doesn't render props as inline styles */
  styles?: CSSAttribute;
}
