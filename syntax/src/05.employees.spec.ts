import { describe, expect, test } from "vitest";
import {
  doSomethingWithAnEmployee,
  doSomethingWithATech,
  isValidEmployeeId,
  verifyTechId,
} from "./employees";
import { Url } from "./utils";

describe("Mapped Types", () => {
  test("employee ids", () => {
    // fn that lets us know if a string has a valid employee ID
    // at our company, employee IDs start with

    expect(isValidEmployeeId("X99999")).toBe(true);

    doSomethingWithAnEmployee("x99999");

    const API_URL: Url = "https://localhost:1337/";

    // http.get(API_URL + 'books)
  });

  test("branded types", () => {
    // let's call data we aren't sure is a valid employee ID, something like "candidateID"

    const candidateId = "Tabc123"; // some data from outside - API, whatever

    const techIdResult = verifyTechId(candidateId);

    if (techIdResult.ok) {
      console.log(techIdResult.value);
      doSomethingWithATech(techIdResult.value);
    } else {
      console.log(techIdResult.error?.message);
    }
  });
});
