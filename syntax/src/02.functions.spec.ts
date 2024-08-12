import { describe, expect, test } from "vitest";
import { add, doubleAndSumIt } from "./stuff/02.stuff";
import { sumThem, sumThemWithUnions } from "./stuff/02.stuff2";

describe('functions and arguments', () => {
    test('params need typing', () => {
        expect(add(2, 2)).toBe(4);
        expect(add(2, 2, 1)).toBe(5);
        expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        doubleAndSumIt(2, 2);
        doubleAndSumIt(2, 2);
        doubleAndSumIt(2, 2);
        doubleAndSumIt(2, 2);
        doubleAndSumIt(2, 2);
    });
    test('summing - overloads', () => {
        expect(sumThem(2, 2)).toBe(4);
        expect(sumThem('dog', 'cat')).toBe('dogcat');

        expect(sumThem([1, 2, 3], [1, 2, 3])).toBe(12);

        sumThemWithUnions(1, 2);
        sumThemWithUnions('dog', 'cat');
    });
});