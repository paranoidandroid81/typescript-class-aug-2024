import { describe, expect, test } from "vitest";
import {
  Actor,
  BankTransaction,
  doTransaction,
  Employee,
  hireEmployee,
  saveActorForNow,
  saveActorForRealz,
  updateSomeOfTheEmployee,
  updateSomePropertyOfTheEmployee,
} from "./stuff/06.stuff";

describe("built-in utility types", () => {
  test("partial", () => {
    // useful for "update" objects
    // used in Redux?
    updateSomeOfTheEmployee("99", { job: "DEV", name: "Bob Smith" });
  });

  test("keys", () => {
    const bob: Employee = {
      id: "99",
      name: "Bob Smith",
      job: "QA",
      salary: 128_000,
    };

    updateSomePropertyOfTheEmployee("name", bob, "Robert");

    const employee = hireEmployee({
      name: "Carol Jones",
      job: "MGMT",
      salary: 180_000,
    });

    console.log(employee);

    const movie = {
      title: "Empire Strikes Back",
      director: "Kershner",
      yearReleased: 1981,
    };

    type Movie = typeof movie;
    type movieKeys = keyof Movie;
    const rotj: Movie = {
      title: "Return of the Jedi",
      director: "Kasdan",
      yearReleased: 1985,
    };

    var workInProcess: Actor = {
      name: "Steve",
    };

    saveActorForNow(workInProcess);

    workInProcess.age = 48;

    // @ts-expect-error
    saveActorForRealz(workInProcess);

    const t = { kind: "Deposit", amount: 3000 } satisfies BankTransaction;
    doTransaction("999", t);

    expect(t).toEqual({ kind: "Deposit", amount: 3000 });
  });
});
