import colorVar from "./color";

it.each`
  param                    | expected
  ${null}                  | ${""}
  ${undefined}             | ${""}
  ${"bg-primary-main"}     | ${"var(--color-bg-primary-main, bg-primary-main)"}
  ${"red"}                 | ${"var(--color-red, red)"}
  ${"#000"}                | ${"#000"}
  ${"rgb(0, 0, 0)"}        | ${"rgb(0, 0, 0)"}
  ${"rgba(0, 0, 0, 0)"}    | ${"rgba(0, 0, 0, 0)"}
  ${"var(--button-color)"} | ${"var(--button-color)"}
`("returns $expected for $param", ({ param, expected }) => {
  const mockFn = jest.fn(colorVar);
  const value = mockFn(param);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(param);
  expect(value).toBe(expected);
});
