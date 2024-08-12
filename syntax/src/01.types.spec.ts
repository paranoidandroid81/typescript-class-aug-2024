import { describe, test, expect } from "vitest";
describe("Opting into type checking", () => {
  test("Uninitialized is Any", () => {
    let age;
    age = 13;

    age = "Old";
  });

  test("Initialize and the type is inferred", () => {
    let age = 13;

    age = 14;
    expect(typeof age).toBe("number");

    // @ts-expect-error
    age = "Old";
    expect(typeof age).toBe("string");
  });

  test("uninitialized should have an annotation", () => {
    let age: number;
    age = 13;

    // @ts-expect-error
    age = "Old";
  });

  test("union type annotation", () => {
    let age: number | string = 13;

    age = "Old";
  });

  test("equality", () => {
    let age = 16;

    let areEqual = age == "16";

    expect(areEqual).toBe(true);
  });

  test("strict equality", () => {
    let age = 16;

    let areEqual = age === "16";

    expect(areEqual).toBe(false);

    let notEqual = age !== +"17";
    expect(notEqual).toBe(true);
  });

  test("truthiness", () => {
    //if a non-boolean value is converted to a boolean, does it convert to true or false? (truthiness/falsiness)
    let isTruthy = !!"dog";
    expect(isTruthy).toBe(true);
    expect("dog").toBeTruthy();

    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(-1).toBeTruthy(); // any # aside from 0 is truthy
    expect({}).toBeTruthy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});
