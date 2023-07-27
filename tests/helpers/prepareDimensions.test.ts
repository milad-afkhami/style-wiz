import prepareDimensions from "../../src/helpers/prepareDimensions";

const givenParam = {
  top: "var(--css-variable)",
  right: "2px",
  bottom: "3rem",
  left: 4,
} as Parameters<typeof prepareDimensions>[0];

const expectedResult = {
  top: "var(--css-variable)",
  right: "var(--spacing-2px, 2px)",
  bottom: "var(--spacing-3rem, 3rem)",
  left: "var(--spacing-4, 4)",
};

it("maps correct values for each dimension", () => {
  const mockFn = jest.fn(prepareDimensions);
  const value = mockFn(givenParam);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(givenParam);
  expect(value).toEqual(expectedResult);
});
