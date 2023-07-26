export type Nullable<T> = T | null;

export type Nullish = null | undefined;

/** Type can be undefined or null */
export type Nullishable<T> = T | Nullish;

// export type NonUndefined<T> = T extends undefined ? never : T;

export type Maybe<T> = T | undefined;

export type Falsy = null | undefined | false | "" | 0 | 0n;

export type Dictionary<T = unknown> = { [key: string]: T };
