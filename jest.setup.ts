import "@testing-library/jest-dom/extend-expect";
import { setup } from "goober";
import { createElement } from "react";
import { prefix } from "goober/prefixer";
import shouldForwardProp from "./src/helpers/shouldForwardProp";

setup(createElement, prefix, undefined, shouldForwardProp);
