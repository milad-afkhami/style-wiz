type Nullable<T> = T | null;

type Nullish = null | undefined;

/** Type can be undefined or null */
type Nullishable<T> = T | Nullish;
// type Nullishable<T> = Nullable<Maybe<T>>;

type NonUndefined<T> = T extends undefined ? never : T;

type Maybe<T> = T | undefined;

type Falsy = null | undefined | false | "" | 0 | 0n;

type Truthy<T> = Exclude<T, Falsy>;
// type Truthy<T> = T extends Falsy ? never : T;

type Primitive = string | number | bigint | boolean | symbol | null | undefined;

type Dictionary<T = unknown> = { [key: string]: T };

/** Dictionary with type specified keys */
type DynamicDictionary<K extends string | number, V> = Record<K, V>;

// interface Tuple<T extends number, Len extends number> extends Array<T> { [key: number]: T; length: Len; }

// type ValueOf<T> = T[keyof T];
type ValueOf<
  T extends
    | ReadonlyArray<unknown>
    | ArrayLike<unknown>
    | Record<unknown, unknown>
> = T extends ReadonlyArray<unknown>
  ? T[number]
  : T extends ArrayLike<unknown>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never;

/** extracts type of resolved promise value */
type UnPromise<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U
  : never;

// Any
type AnyLiteral = Record<string, unknown>;

type AnyClass = new (...args: unknown[]) => unknown;

type AnyFunction = (...args: unknown[]) => unknown;

type AnyToVoidFunction = (...args: unknown[]) => void;

type NoneToVoidFunction = () => void;

// Integer
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

/**
 * Merge two object types
 * @example
 * type ObjectType1 = { a: string; b: number; c: boolean };
 * type ObjectType2 = { a: number; b: string; d: boolean };
 * type Merged = MergeBy<ObjectType1, ObjectType2>;
 * // Merged = { a: number; b: string; c: boolean; d: boolean };
 */
type MergeBy<T, K> = Omit<T, keyof K> & K;

/**
 * Subtract two object types
 * @description Remove shared properties of two object types from the first one
 * @example
 * type ObjectType1 = { a: string; b: number; c: boolean };
 * type ObjectType2 = { a: number; b: string; d: boolean };
 * type Subtracted = Subtract<ObjectType1, ObjectType2>;
 * // Subtracted = { c: boolean; };
 */
type Subtract<T extends K, K> = Omit<T, keyof K>;
