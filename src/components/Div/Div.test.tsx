import React from "react";
import { render } from "@testing-library/react";
import { Div } from "./";

test("Div Kit", () => {
  expect(render(<Div />)).not.toThrow();
});
