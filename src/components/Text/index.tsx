import { forwardRef } from "react";
import { styled, type CSSAttribute } from "goober";
import CSSVariableHelper from "@helpers/cssVar";
import type TextProps from "./props";

const truncateStyles: Partial<CSSAttribute> = {
  maxWidth: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

const maxLinesStyles = (
  count: TextProps["maxLines"]
): Partial<CSSAttribute> => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  lineClamp: count,
  WebkitLineClamp: count,
  boxOrient: "vertical",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
});

/** Adds stylistic sets of 1 to font feature settings for adding persian numerals */
const fontFeaturesSettings = {
  "-moz-font-feature-settings": '"ss01"',
  "-webkit-font-feature-settings": '"ss01"',
  "font-feature-settings": '"ss01"',
};

const Text = styled(
  "span",
  forwardRef
)<TextProps>(
  ({
    size,
    color,
    hoverColor,
    bold,
    truncate,
    align,
    userSelect,
    maxLines,
    transform,
    css,
  }) => ({
    ...(color ? { color: CSSVariableHelper.color(color) } : {}),
    ...(size ? { fontSize: CSSVariableHelper.fontSize(size) } : {}),
    fontWeight: bold ? "bold" : "normal",
    margin: 0,
    transition: "var(--pace-fast)",
    ...(align ? { textAlign: align } : {}),
    ...(userSelect ? { userSelect } : {}),
    ...(transform ? { textTransform: transform } : {}),
    ...(truncate ? truncateStyles : {}),
    ...(maxLines ? maxLinesStyles(maxLines) : {}),
    ...(hoverColor
      ? { "&:hover": { color: CSSVariableHelper.color(hoverColor) } }
      : {}),
    ...fontFeaturesSettings,
    ...(css || {}),
  })
);

export { Text, TextProps };
