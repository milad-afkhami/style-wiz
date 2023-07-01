import type { CSSAttribute } from "goober";
import type DivProps from "@components/Div/props";

const justifyValues = {
  center: "center",
  end: "flex-end",
  "flex-end": "flex-end",
  start: "flex-start",
  "flex-start": "flex-start",
  around: "space-around",
  "space-around": "space-around",
  between: "space-between",
  "space-between": "space-between",
};
const alignValues = {
  center: "center",
  end: "flex-end",
  "flex-end": "flex-end",
  start: "flex-start",
  "flex-start": "flex-start",
};

interface Flex {
  (...props: NonNullable<DivProps["flex"]>): CSSAttribute;
}

const flex: Flex = function (align, justify, dir, wrap) {
  return {
    display: "flex",
    ...(align ? { alignItems: alignValues[align] } : {}),
    ...(justify ? { justifyContent: justifyValues[justify] || justify } : {}),
    ...(dir ? { flexDirection: dir || "row" } : {}),
    ...(wrap ? { flexWrap: wrap } : {}),
  };
};

export default flex;
