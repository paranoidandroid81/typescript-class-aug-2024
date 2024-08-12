export function sumThem(a: number, b: number): number;
export function sumThem(a: string, b: string): number;
export function sumThem(a: number[], b: number[]): number;

export function sumThem(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b].reduce((l, r) => l + r);
  }
  return -42;
}

type SummableItems = number | string | number[];
export function sumThemWithUnions(a: SummableItems, b: SummableItems) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b].reduce((l, r) => l + r);
  }
  return -42;
}

export const calculateTaxForFullTime = (n: number) => n * 0.2;
export const calculateTaxForContractor = (n: number) => n * 0;
type TaxablePayCalculation = (n: number) => number;
export function calculateWeeklyPay(
  annualPay: number,
  taxableFn: TaxablePayCalculation
) {
  const pay = annualPay / 52;
  return {
    weeklyPay: Math.round(pay),
    taxableAmount: Math.round(taxableFn(pay)),
  };
}

export function tagMaker(tag: string) {
    return (content: string) => `<${tag}>${content}</${tag}>`;
}

// example of how classes and higher order functions like tagMaker can serve similar purposes
export class TagMaker {
    private _tag: string;

    constructor(tag: string) {
        this._tag = tag;
    }

    make(content: string) {
        return `<${this._tag}>${content}</${this._tag}>`;
    }
}
