import CSSVariableHelper from "@helpers/cssVar";

describe("`CSSVariableHelper` works properly", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("the `color` method works properly", () => {
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
      const spiedMethod = jest.spyOn(CSSVariableHelper, "color");
      const value = CSSVariableHelper.color(param);

      expect(spiedMethod).toBeCalledTimes(1);
      expect(spiedMethod).toHaveBeenCalledWith(param);
      expect(value).toBe(expected);
    });
  });

  describe("the `fontSize` method works properly", () => {
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
      const spiedMethod = jest.spyOn(CSSVariableHelper, "fontSize");
      const value = CSSVariableHelper.fontSize(param);

      expect(spiedMethod).toBeCalledTimes(1);
      expect(spiedMethod).toHaveBeenCalledWith(param);
      expect(value).toBe(expected);
    });
  });

  describe("the `spacing` method works properly", () => {
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
      const spiedMethod = jest.spyOn(CSSVariableHelper, "spacing");
      const value = CSSVariableHelper.spacing(param);

      expect(spiedMethod).toBeCalledTimes(1);
      expect(spiedMethod).toHaveBeenCalledWith(param);
      expect(value).toBe(expected);
    });
  });
});
