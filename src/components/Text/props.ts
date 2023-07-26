import type { HTMLAttributes } from "react";
import type { CSSAttribute } from "goober";
import type { Typography, Colors } from "@typings/stylesheets";

export default interface TextProps extends HTMLAttributes<Element> {
  // as?: Parameters<typeof styled>[0];
  as?: keyof JSX.IntrinsicElements;
  size?: Typography | CSSAttribute["fontSize"];
  color?: Colors;
  hoverColor?: Colors;
  maxLines?: number;
  bold?: boolean;
  truncate?: boolean;
  transform?: CSSAttribute["textTransform"];
  userSelect?: CSSAttribute["userSelect"];
  align?: CSSAttribute["textAlign"];
  styles?: CSSAttribute;
}
