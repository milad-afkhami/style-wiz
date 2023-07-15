import capitalize from "@utils/capitalize";

it.each`
  param        | expected
  ${null}      | ${""}
  ${undefined} | ${""}
  ${""}        | ${""}
  ${"text"}    | ${"Text"}
  ${"teXt"}    | ${"Text"}
  ${"Text"}    | ${"Text"}
  ${"TEXT"}    | ${"Text"}
  ${"te-xt"}   | ${"Te-xt"}
  ${"te_xt"}   | ${"Te_xt"}
  ${"text1"}   | ${"Text1"}
  ${"1text"}   | ${"1text"}
  ${"@text"}   | ${"@text"}
  ${"#text"}   | ${"#text"}
`("returns $expected for $param", ({ param, expected }) => {
  const mockFn = jest.fn(capitalize);
  const value = mockFn(param);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(param);
  expect(value).toBe(expected);
});
