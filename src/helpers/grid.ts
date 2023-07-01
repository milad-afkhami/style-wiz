import spacingVar from "@helpers/var/spacingVar";
import type DivProps from "@components/Div/props";
import type { CSSAttribute } from "goober";

interface Grid {
  (...props: NonNullable<DivProps["grid"]>): Pick<
    CSSAttribute,
    | "display"
    | "gridTemplateColumns"
    | "gridTemplateRows"
    | "columnGap"
    | "rowGap"
    | "gridAutoFlow"
    | "alignContent"
    | "justifyItems"
  >;
}

const grid: Grid = function (
  cols,
  rows,
  colGap,
  rowGap,
  autoFlow,
  align,
  justify
) {
  return {
    display: "grid",
    ...(cols ? { gridTemplateColumns: cols } : {}),
    ...(rows ? { gridTemplateRows: rows } : {}),
    ...(colGap ? { columnGap: spacingVar(colGap) } : {}),
    ...(rowGap ? { rowGap: spacingVar(rowGap) } : {}),
    ...(autoFlow ? { gridAutoFlow: autoFlow } : {}),
    ...(align ? { alignContent: align } : {}),
    ...(justify ? { justifyItems: justify } : {}),
  };
};

export default grid;
