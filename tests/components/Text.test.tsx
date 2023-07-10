import React from "react";
import { render } from "@testing-library/react";
import { Text } from "@components/Text";

describe("Text Kit works properly", () => {
  it("renders string children intact", () => {
    const { getByText } = render(<Text>children</Text>);

    expect(getByText("children")).toBeInTheDocument();
  });

  it("renders jsx children intact", () => {
    const { getByText } = render(
      <Text>
        <span>children</span>
      </Text>
    );

    expect(getByText("children")).toBeInTheDocument();
  });

  it("renders dir, id, className, role, test id, and title attributes intact", () => {
    const { container, getByRole, getByTestId, getByTitle } = render(
      <Text
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
    const { getByText } = render(<Text as="p">children</Text>);

    expect(getByText("children", { selector: "p" })).toBeInTheDocument();
  });

  it("renders the `css` prop correctly and not as inline style", () => {
    const { container } = render(<Text css={{ lineHeight: "normal" }} />);

    expect(container.firstChild).toHaveStyle({ lineHeight: "normal" });
    expect(container.firstChild).not.toHaveAttribute("style");
  });

  it("renders `size` property correctly", () => {
    const { container } = render(<Text size="sm" />);

    expect(container.firstChild).toHaveStyle({
      fontSize: "var(--size-sm, sm)",
    });
  });

  it("renders `text-transform` property intact", () => {
    const { container } = render(<Text transform="capitalize" />);

    expect(container.firstChild).toHaveStyle({ textTransform: "capitalize" });
  });

  it("renders `user-select` property intact", () => {
    const { container } = render(<Text userSelect="none" />);

    expect(container.firstChild).toHaveStyle({ userSelect: "none" });
  });

  it("renders `text-align` property intact", () => {
    const { container } = render(<Text align="center" />);

    expect(container.firstChild).toHaveStyle({ textAlign: "center" });
  });

  it("renders bold text", () => {
    const { container } = render(<Text bold />);

    expect(container.firstChild).toHaveStyle({
      fontWeight: "bold",
    });
  });

  it("renders the `color` property correctly", () => {
    // this is the same as the `src/helpers/var/color.test.ts` test
    // so to avoid duplication, we don't write tests here too
  });
});
