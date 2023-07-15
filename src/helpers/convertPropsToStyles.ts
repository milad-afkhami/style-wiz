import prepareDimensions from "@helpers/prepareDimensions";
import prepareSpacing from "@helpers/prepareSpacing";
import getOtherSpacings from "@helpers/getOtherSpacings";
import flexer from "@helpers/flex";
import grider from "@helpers/grid";
import CSSVariableHelper from "@helpers/cssVar";
import isNullish from "@utils/isNullish";
import capitalize from "@utils/capitalize";
import type { CSSAttribute } from "goober";
import type DivProps from "@components/Div/props";

export default function convertPropsToStyles(
  props: DivProps
): Partial<CSSAttribute> {
  const {
    width,
    mw,
    Mw,
    height,
    mh,
    Mh,
    curve,
    shadow,
    pace,
    border,
    borderSide = "",
    borderW = "1px",
    bg,
    bgImage,
    color,
    hoverBg,
    hoverColor,
    hoverShadow,
    m,
    p,
    gap,
    flex,
    flexPortion,
    display,
    opacity,
    grid,
    overflow,
    overflowX,
    overflowY,
    cursor,
    position,
    dimensions,
    zIndex,
    order,
    rotate,
    styles,
    matchParent,
    ...restProps
  } = props;

  return {
    ...(width ? { width } : {}),
    ...(mw ? { minWidth: mw } : {}),
    ...(Mw ? { maxWidth: Mw } : {}),
    ...(height ? { height } : {}),
    ...(mh ? { minHeight: mh } : {}),
    ...(Mh ? { maxHeight: Mh } : {}),
    ...(matchParent
      ? {
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }
      : {}),
    ...(position ? { position } : {}),
    ...(zIndex ? { zIndex } : {}),
    ...(dimensions ? prepareDimensions(dimensions) : {}),
    ...(curve
      ? {
          borderRadius: `var(--curve-${
            curve === true ? "sm" : curve
          }, ${curve})`,
        }
      : {}),
    ...(shadow ? { boxShadow: `var(--shadow-${shadow}, ${shadow})` } : {}),
    ...(gap ? { gap: `var(--spacing-${gap}, ${gap})` } : {}),
    ...(pace ? { transition: `all var(--pace-${pace}, ${pace})` } : {}),
    ...(border
      ? {
          [`border${capitalize(
            borderSide
          )}`]: `${borderW} solid ${CSSVariableHelper.color(border)}`,
        }
      : {}),
    ...(bg ? { background: CSSVariableHelper.color(bg) } : {}),
    ...(bgImage ? { backgroundImage: bgImage } : {}),
    ...(overflow ? { overflow } : {}),
    ...(overflowX ? { overflowX } : {}),
    ...(overflowY ? { overflowY } : {}),
    ...(order ? { order } : {}),
    ...(rotate
      ? {
          transform: `rotate(calc(${
            typeof rotate === "string"
              ? `${rotate.replace("q", "")} * 90`
              : rotate
          }deg))`,
        }
      : {}),
    ...(cursor ? { cursor } : {}),
    ...(!isNullish(opacity) ? { opacity } : {}),
    ...(color ? { color: CSSVariableHelper.color(color) } : {}),
    ...(!isNullish(m) ? { margin: prepareSpacing(m) } : {}),
    ...(!isNullish(p) ? { padding: prepareSpacing(p) } : {}),
    ...getOtherSpacings(restProps),
    ...(hoverBg || hoverColor || hoverShadow
      ? {
          ...(!pace ? { transition: `all var(--pace-fast)` } : {}),
          "&:hover": {
            ...(hoverBg
              ? { background: CSSVariableHelper.color(hoverBg) }
              : {}),
            ...(hoverColor
              ? { "& ,& *": { color: CSSVariableHelper.color(hoverColor) } }
              : {}),
            ...(hoverShadow
              ? { boxShadow: `var(--shadow-${hoverShadow}, ${hoverShadow})` }
              : {}),
          },
        }
      : {}),
    ...(display ? { display: display || "flex" } : {}),
    ...(flexPortion ? { flex: flexPortion } : {}),
    ...(flex && flex.length ? flexer(...flex) : {}),
    ...(grid && grid.length ? grider(...grid) : {}),
    ...(styles || {}),
  };
}
