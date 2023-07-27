import React from "react";
import { render } from "@testing-library/react";
import { Div } from "../../src/components/Div";

describe("Div Kit works properly", () => {
  it("renders string children intact", () => {
    const { getByText } = render(<Div>children</Div>);

    expect(getByText("children")).toBeInTheDocument();
  });

  it("renders jsx children intact", () => {
    const { getByText } = render(
      <Div>
        <div>children</div>
      </Div>
    );

    expect(getByText("children")).toBeInTheDocument();
  });

  it("renders dir, id, className, role, test id, and title attributes intact", () => {
    const { container, getByRole, getByTestId, getByTitle } = render(
      <Div
        dir="ltr"
        id="id"
        className="className"
        role="role"
        data-testid="test-id"
        title="title"
      />
    );

    expect(container.firstChild).toHaveAttribute("dir", "ltr");
    expect(container.firstChild).toHaveAttribute("id", "id");
    expect(container.firstChild).toHaveClass("className");
    expect(getByRole("role")).toBeInTheDocument();
    expect(getByTestId("test-id")).toBeInTheDocument();
    expect(getByTitle("title")).toBeInTheDocument();
  });

  it("renders another HTML element", () => {
    const { getByText } = render(<Div as="section">children</Div>);

    expect(getByText("children", { selector: "section" })).toBeInTheDocument();
  });

  it("renders the `styles` prop correctly and not as inline style", () => {
    const { container } = render(<Div styles={{ width: "100px" }} />);

    expect(container.firstChild).toHaveStyle({ width: "100px" });
    expect(container.firstChild).not.toHaveAttribute("style");
  });

  it.each`
    value
    ${"1px"}
    ${"var(--css-variable)"}
    ${"1%"}
    ${"1rem"}
  `("renders size properties intact", ({ value }) => {
    const { container } = render(
      <Div
        width={value}
        height={value}
        mw={value}
        mh={value}
        Mw={value}
        Mh={value}
      />
    );

    expect(container.firstChild).toHaveStyle({
      width: value,
      height: value,
      minWidth: value,
      minHeight: value,
      maxWidth: value,
      maxHeight: value,
    });
  });

  it("renders spacing properties intact", () => {
    // this is the same as the `src/helpers/var/spacing.test.ts` test
    // so to avoid duplication we don't write tests here too
    // m, mStart, mEnd, mx, my, mt, mb, mr, ml, p, pStart, pEnd, px, py, pt, pb, pr, pl
  });

  it("renders border properties correctly", () => {
    const { container } = render(
      <Div border="border-light-main" borderSide="top" borderW="2px" />
    );

    expect(container.firstChild).toHaveStyle({
      borderTop: "2px solid var(--color-border-light-main)",
    });
  });

  it("renders the `curve` property correctly", () => {
    const { container } = render(<Div curve="sm" />);

    expect(container.firstChild).toHaveStyle({
      borderRadius: "var(--curve-sm, sm)",
    });
  });

  it("renders the `shadow` property correctly", () => {
    const { container } = render(<Div shadow="sm" />);

    expect(container.firstChild).toHaveStyle({
      boxShadow: "var(--shadow-sm, sm)",
    });
  });

  it("renders the `pace` property correctly", () => {
    const { container } = render(<Div pace="fast" />);

    expect(container.firstChild).toHaveStyle(
      "transition: all var(--pace-fast, fast)"
    );
  });

  it("renders the `color` & `bg` property correctly", () => {
    // this is the same as the `src/helpers/var/color.test.ts` test
    // so to avoid duplication, we don't write tests here too
  });

  it("renders the `opacity` property correctly", () => {
    const { container } = render(<Div opacity="0.5" />);

    expect(container.firstChild).toHaveStyle({ opacity: 0.5 });
  });

  it("renders the `flex` property correctly", () => {
    const { container } = render(
      <Div flex={["center", "center", "column", "nowrap"]} />
    );

    expect(container.firstChild).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexWrap: "nowrap",
    });
  });

  it("renders the `flexPortion` property correctly", () => {
    const { container } = render(<Div flexPortion={1} />);

    expect(container.firstChild).toHaveStyle({ flex: 1 });
  });

  it("renders the `display` property correctly", () => {
    const { container } = render(<Div display="flex" />);

    expect(container.firstChild).toHaveStyle({ display: "flex" });
  });

  it("renders the `gap` property correctly", () => {
    const { container } = render(<Div gap="3" />);

    expect(container.firstChild).toHaveStyle({ gap: "var(--spacing-3, 3)" });
  });

  it("renders overflow properties correctly", () => {
    const { container } = render(
      <Div overflow="auto" overflowX="auto" overflowY="auto" />
    );

    expect(container.firstChild).toHaveStyle({
      overflow: "auto",
      overflowX: "auto",
      overflowY: "auto",
    });
  });

  it("renders the `cursor` property correctly", () => {
    const { container } = render(<Div cursor="pointer" />);

    expect(container.firstChild).toHaveStyle({ cursor: "pointer" });
  });

  it("renders the `position` property correctly", () => {
    const { container } = render(<Div position="relative" />);

    expect(container.firstChild).toHaveStyle({ position: "relative" });
  });

  it("renders the `dimensions` property correctly", () => {
    const { container } = render(
      <Div dimensions={{ top: 1, right: 2, bottom: 3, left: 4 }} />
    );

    expect(container.firstChild).toHaveStyle({
      top: "var(--spacing-1, 1)",
      right: "var(--spacing-2, 2)",
      bottom: "var(--spacing-3, 3)",
      left: "var(--spacing-4, 4)",
    });
  });

  it("renders the `zIndex` property correctly", () => {
    const { container } = render(<Div zIndex="1" />);

    expect(container.firstChild).toHaveStyle({ zIndex: 1 });
  });

  it("renders the `order` property correctly", () => {
    const { container } = render(<Div order={1} />);

    expect(container.firstChild).toHaveStyle({ order: 1 });
  });

  it("renders the `rotate` property correctly", () => {
    const { container } = render(<Div rotate="1q" />);

    expect(container.firstChild).toHaveStyle({
      transform: "rotate(calc(1 * 90deg))",
    });
  });

  it("renders the `grid` property correctly", () => {
    const { container } = render(
      <Div
        grid={[
          "1fr",
          "repeat(2, 3fr)",
          "4",
          "5",
          "row",
          "center",
          "space-between",
        ]}
      />
    );

    expect(container.firstChild).toHaveStyle({
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(2, 3fr)",
      columnGap: "var(--spacing-4, 4)",
      rowGap: "var(--spacing-5, 5)",
      gridAutoFlow: "row",
      alignContent: "center",
      justifyItems: "space-between",
    });
  });
});
