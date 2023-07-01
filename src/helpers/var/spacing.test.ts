import spacingVar from "./spacingVar";

it.each`
  param                       | expected
  ${null}                     | ${""}
  ${undefined}                | ${""}
  ${1}                        | ${"var(--spacing-1, 1)"}
  ${"1px"}                    | ${"var(--spacing-1px, 1px)"}
  ${"1em"}                    | ${"var(--spacing-1em, 1em)"}
  ${"1rem"}                   | ${"var(--spacing-1rem, 1rem)"}
  ${"1.1rem"}                 | ${"1.1rem"}
  ${"1%"}                     | ${"1%"}
  ${"var(--element-spacing)"} | ${"var(--element-spacing)"}
`("returns $expected for $param", ({ param, expected }) => {
  const mockFn = jest.fn(spacingVar);
  const value = mockFn(param);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(param);
  expect(value).toBe(expected);
});
