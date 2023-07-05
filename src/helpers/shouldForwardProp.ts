import { shouldForwardProp as gooberShouldForwardProp } from "goober/should-forward-prop";

const domProhibitedProps = [
  // Div
  // "width", "height" // in case a component extended Div and needed width and height attributes
  "mw",
  "Mw",
  "mh",
  "Mh",
  "matchParent",
  "curve",
  "shadow",
  "pace",
  "border",
  "borderW",
  "borderSide",
  "opacity",
  "bg",
  "bgImage",
  "color",
  "hover",
  "hoverBg",
  "hoverColor",
  "hoverShadow",
  "zoomOnHover",
  "m",
  "mStart",
  "mEnd",
  "mx",
  "my",
  "mt",
  "mb",
  "p",
  "pStart",
  "pEnd",
  "px",
  "py",
  "pt",
  "pb",
  "gap",
  "flex",
  "flexPortion",
  "display",
  "overflow",
  "overflowX",
  "overflowY",
  "cursor",
  "position",
  "dimensions",
  "zIndex",
  "order",
  "grid",
  "css",
  "rotate",
  // Text
  "lineHeight",
  "maxLines",
  "truncate",
  "bold",
  "userSelect",
  "noTranslation",
  "ns",
  // Image
  "preload",
];

const shouldForwardProp = gooberShouldForwardProp(
  (prop) => !domProhibitedProps.includes(prop)
);

export default shouldForwardProp;
