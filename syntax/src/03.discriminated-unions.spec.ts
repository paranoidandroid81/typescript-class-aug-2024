import { describe, expect, test } from "vitest";

describe("union stuff", () => {
  test("literal unions", () => {
    type Handler = "click" | "hover" | "scroll";

    const setHandler = (event: Handler, callback: () => void) => {
      // code to hook this up
    };

    setHandler("click", () => console.log("did it"));
  });

  test("narrowing unions", () => {
    type ApiResponse = { data: string } | { error: string };

    function doApiCall(n: number): ApiResponse {
      return n % 2 === 0 ? { data: "Good stuff " } : { error: "That blew up" };
    }

    const result = doApiCall(2);

    if ("data" in result) {
      // I got a good response!
      console.log(result.data);
    }
    if ("error" in result) {
      // I got an error
      console.log(result.error);
    }
  });

  test("narrowing with a function", () => {
    type Person = { name: string; age: number };
    const someJson = `{"name": "Bob", "age": 35}`;

    const obj = JSON.parse(someJson);

    const isPerson = (value: unknown): value is Person => {
      return (
        typeof value === "object" &&
        value !== null &&
        "age" in value &&
        typeof value.age === "number" &&
        "name" in value &&
        typeof value.name === "string"
      );
    };

    if (isPerson(obj)) {
      expect(obj.age).toBe(35);
      expect(obj.name).toBe("Bob");
    } else {
      expect(true).toBe(false);
    }
  });

  test("intro to discriminated unions", () => {
    type ApiResponse =
      | { kind: "success"; data: string }
      | { kind: "error"; error: string };

    function doApiCall(n: number): ApiResponse {
      return n % 2 === 0
        ? { kind: "success", data: "Good stuff " }
        : { kind: "error", error: "That blew up" };
    }

    const result = doApiCall(2);

    // if ("data" in result) {
    //   // I got a good response!
    //   console.log(result.data);
    // }
    // if ("error" in result) {
    //   // I got an error
    //   console.log(result.error);
    // }

    switch (result.kind) {
        case 'error': {
            console.log(result.error);
            break;
        }
        case 'success': {
            console.log(result.data);
            break;
        }
    }
  });
});
