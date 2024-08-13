import { describe, expect, test } from "vitest";
import {
  doSomethingWithAnEmployee,
  doSomethingWithATech,
  isValidEmployeeId,
  verifyTechId,
} from "./employees";
import { HasNone, HasSome, None, Option, Url } from "./utils";

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

describe("utility types", () => {
  test("options", () => {
    // some data from somewhere (API)
    const customers = [
      { id: "99", state: "OH", balance: 3000 },
      { id: "101", state: "KY", balance: 10_000 },
      { id: "200", state: "VA", balance: 99_000 },
    ];

    // what are the balances of my customers that owe me 100_000 or more
    // const balances = customers
    //   .filter((c) => c.balance >= 100_000)
    //   .map((c) => c.balance);

    // console.log(balances);

    type CustomerInfo = {
      id: string;
      state: string;
      balance: number;
    };

    const highBalances = highBalanceCustomers(customers, 10_000);
    switch (highBalances.tag) {
      case "None":
        console.log("No customers with balance equal to or greater than 50k");
        break;
      case "Some":
        console.log("These balances are high", highBalances.value);
    }

    function highBalanceCustomers(
      customers: CustomerInfo[],
      cutoff: number
    ): Option<number[]> {
      const balances = customers
        .filter((c) => c.balance >= cutoff)
        .map((c) => c.balance);

      if (balances.length === 0) {
        return HasNone();
      } else {
        return HasSome(balances);
      }
    }
  });
});
