import { describe, expect, test } from "vitest";

describe("random stuff Jeff wants to show", () => {
  test("expand", () => {
    type Movie = {
      title: string;
      director?: string;
      meta: Record<string, unknown>;
    };
    const movie: Movie = { title: "Jaws", meta: {} };

    movie.meta.director = "Spielberg";

    movie.meta.yearReleased = "1977";

    // record = { TKey: TValue } = Record<Number, Order> = { 99 : {} }
    expect(movie.meta.yearReleased).toBe("1977");
  });
});
