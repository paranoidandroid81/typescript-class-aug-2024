export type Url = `http://${string}/` | `https://${string}/`;

// "declare" declares a global thing; mostly util/library stuff
declare const brand: unique symbol;

export type Brand<T, TBrand> = T & { [brand]: TBrand };

export type Result<T, E = undefined> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: E | undefined;
    };

export const Ok = <T>(data: T): Result<T, never> => ({
  ok: true,
  value: data,
});

export const Err = <E>(error?: E): Result<never, E> => ({
  ok: false,
  error,
});

export type Some<T> = {
  tag: "Some";
  value: T;
};

export type None = {
  tag: "None";
};

export const HasSome = <T>(value: T): Option<T> => ({
  tag: "Some",
  value,
});

export const HasNone = (): None => ({
  tag: "None",
});

export type Option<T> = Some<T> | None;
