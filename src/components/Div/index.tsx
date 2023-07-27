import { styled } from "goober";
import { forwardRef } from "react";
import convertPropsToStyles from "@helpers/convertPropsToStyles";
import type DivProps from "./props";

export type { DivProps };

export const Div = styled("div", forwardRef)<DivProps>(convertPropsToStyles);
