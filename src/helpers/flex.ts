import type { CSSAttribute } from "goober";
import type DivProps from "@components/Div/props";

interface Flex {
  (...props: NonNullable<DivProps["flex"]>): CSSAttribute;
}

const flex: Flex = function (alignItems, justifyContent, dir, wrap) {
  return {
    display: "flex",
    ...(alignItems ? { alignItems } : {}),
    ...(justifyContent ? { justifyContent } : {}),
    ...(dir ? { flexDirection: dir || "row" } : {}),
    ...(wrap ? { flexWrap: wrap } : {}),
  };
};

export default flex;
