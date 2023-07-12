import { createElement } from "react";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import shouldForwardProp from "@helpers/shouldForwardProp";

export default class GooberHelper {
  static setup() {
    setup(createElement, prefix, undefined, shouldForwardProp);
  }
}
