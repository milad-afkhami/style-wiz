import { forwardRef } from "react";
import { styled, type CSSAttribute } from "goober";
import colorVar from "@helpers/var/color";
import fontSizeVar from "@helpers/var/fontSize";
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
    lineHeight,
    userSelect,
    maxLines,
    transform,
    css,
  }) => ({
    ...(color ? { color: colorVar(color) } : {}),
    ...(size ? { fontSize: fontSizeVar(size) } : {}),
    fontWeight: bold ? "bold" : "normal",
    margin: 0,
    transition: "var(--pace-fast)",
    ...(align ? { textAlign: align } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(userSelect ? { userSelect } : {}),
    ...(transform ? { textTransform: transform } : {}),
    ...(truncate ? truncateStyles : {}),
    ...(maxLines ? maxLinesStyles(maxLines) : {}),
    ...(hoverColor ? { "&:hover": { color: colorVar(hoverColor) } } : {}),
    ...fontFeaturesSettings,
    ...(css || {}),
  })
);

export { Text, TextProps };
