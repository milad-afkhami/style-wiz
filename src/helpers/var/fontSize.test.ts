import fontSizeVar from "./fontSize";

it.each`
  param                    | expected
  ${null}                  | ${""}
  ${undefined}             | ${""}
  ${"sm"}                  | ${"var(--font-size-sm, sm)"}
  ${"1px"}                 | ${"var(--font-size-1px, 1px)"}
  ${"1em"}                 | ${"var(--font-size-1em, 1em)"}
  ${"1rem"}                | ${"var(--font-size-1rem, 1rem)"}
  ${"1.1rem"}              | ${"1.1rem"}
  ${"var(--element-text)"} | ${"var(--element-text)"}
`("returns $expected for $param", ({ param, expected }) => {
  const mockFn = jest.fn(fontSizeVar);
  const value = mockFn(param);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(param);
  expect(value).toBe(expected);
});
