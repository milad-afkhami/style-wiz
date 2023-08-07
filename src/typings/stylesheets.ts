// prettier-ignore
// eslint-disable-next-line @typescript-eslint/ban-types
export type Spacings = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | "auto" | (string & {});

type HexColor = `#${number | string}`;
type RGBColor = `rgb${"a" | ""}(${number}, ${number}, ${number})`;
// type ValidHexChar = "A" | "B" | "C" | "D" | "E" | "F";

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/ban-types
export type Colors = HexColor | RGBColor | (string & {}) | "brand-primary-main" | "brand-primary-hover" | "brand-primary-light" | "brand-primary-lighter" | "brand-primary-dark" | "brand-primary-pale" | "brand-primary-paler" | "brand-primary-contrast" | "brand-secondary-main" | "brand-secondary-hover" | "brand-secondary-light" | "brand-secondary-lighter" | "brand-secondary-dark" | "brand-secondary-pale" | "brand-secondary-paler" | "brand-secondary-contrast" | "bg-primary-main" | "bg-primary-hover" | "bg-primary-light" | "bg-primary-lighter" | "bg-primary-dark" | "bg-primary-pale" | "bg-primary-paler" | "bg-primary-contrast" | "bg-secondary-main" | "bg-secondary-hover" | "bg-secondary-light" | "bg-secondary-lighter" | "bg-secondary-dark" | "bg-secondary-pale" | "bg-secondary-paler" | "bg-secondary-contrast" | "bg-tertiary-main" | "bg-tertiary-hover" | "bg-tertiary-light" | "bg-tertiary-lighter" | "bg-tertiary-dark" | "bg-tertiary-pale" | "bg-tertiary-paler" | "bg-tertiary-contrast" | "bg-disabled-main" | "bg-disabled-hover" | "bg-disabled-light" | "bg-disabled-lighter" | "bg-disabled-dark" | "bg-disabled-pale" | "bg-disabled-paler" | "bg-disabled-contrast" | "text-primary-main" | "text-primary-hover" | "text-primary-light" | "text-primary-lighter" | "text-primary-dark" | "text-primary-pale" | "text-primary-paler" | "text-primary-contrast" | "text-secondary-main" | "text-secondary-hover" | "text-secondary-light" | "text-secondary-lighter" | "text-secondary-dark" | "text-secondary-pale" | "text-secondary-paler" | "text-secondary-contrast" | "text-tertiary-main" | "text-tertiary-hover" | "text-tertiary-light" | "text-tertiary-lighter" | "text-tertiary-dark" | "text-tertiary-pale" | "text-tertiary-paler" | "text-tertiary-contrast" | "text-disabled-main" | "text-disabled-hover" | "text-disabled-light" | "text-disabled-lighter" | "text-disabled-dark" | "text-disabled-pale" | "text-disabled-paler" | "text-disabled-contrast" | "assistive-success-main" | "assistive-success-hover" | "assistive-success-light" | "assistive-success-lighter" | "assistive-success-dark" | "assistive-success-pale" | "assistive-success-paler" | "assistive-success-contrast" | "assistive-error-main" | "assistive-error-hover" | "assistive-error-light" | "assistive-error-lighter" | "assistive-error-dark" | "assistive-error-pale" | "assistive-error-paler" | "assistive-error-contrast" | "assistive-info-main" | "assistive-info-hover" | "assistive-info-light" | "assistive-info-lighter" | "assistive-info-dark" | "assistive-info-pale" | "assistive-info-paler" | "assistive-info-contrast" | "assistive-warning-main" | "assistive-warning-hover" | "assistive-warning-light" | "assistive-warning-lighter" | "assistive-warning-dark" | "assistive-warning-pale" | "assistive-warning-paler" | "assistive-warning-contrast" | "border-dark-main" | "border-dark-hover" | "border-dark-light" | "border-dark-lighter" | "border-dark-dark" | "border-dark-pale" | "border-dark-paler" | "border-dark-contrast" | "border-light-main" | "border-light-hover" | "border-light-light" | "border-light-lighter" | "border-light-dark" | "border-light-pale" | "border-light-paler" | "border-light-contrast";
// `& {}` in `(string & {})` is for not messing with intellisense

// prettier-ignore
export type Typography = "h-xxl" | "h-xl" | "h-lg" | "h-md" | "h-sm" | "lg" | "md" | "sm" | "xsm";

// prettier-ignore
export type Curves = "xlg" | "lg" | "md" | "sm" | "xsm" | "xxsm" | "circle" | true | false;

/**
 * sm: elevation 1
 * md: elevation 4
 * lg: elevation 8
 * xlg: elevation 20 */
export type Shadows = "sm" | "md" | "lg" | "xlg" | true | false;

export type Paces = "x-fast" | "fast" | "normal" | "slow" | "x-slow";
