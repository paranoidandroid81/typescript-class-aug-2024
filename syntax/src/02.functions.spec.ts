import { describe, expect, test } from "vitest";
import { add, doubleAndSumIt } from "./stuff/02.stuff";
import { calculateTaxForContractor, calculateTaxForFullTime, calculateWeeklyPay, sumThem, sumThemWithUnions, TagMaker, tagMaker } from "./stuff/02.stuff2";

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

describe('object literals & functions', () => {
    test('plain object literals', () => {
        type Actor = {
            firstName: string;
            lastName: string;
            age: number;
            jedi: boolean;
            getInfo: () => string;
        };
        const luke = {
            firstName: 'Luke',
            lastName: 'Skywalker',
            age: 22,
            jed: true,
            getInfo: function() {
                return `This is ${this.firstName} ${this.lastName}`
            }
        };

        const han: Actor = {
            firstName: 'Han',
            lastName: 'Solo',
            age: 33,
            jedi: false,
            getInfo: function() {
                return `This is ${this.firstName} ${this.lastName}`
            }
        };

        expect(luke.firstName).toBe('Luke');
        expect(luke.getInfo()).toBe('This is Luke Skywalker');

        // structural typing for Luke, no explicit type annotation
        doSomething(luke);
        doSomething(han);

        function doSomething(who: { lastName: string, getInfo: () => string }) {
            console.log(who.lastName);
            console.log(who.getInfo());
        }
    });

    test('higher ordered functions', () => {
        // functions that take 1 or more functions as an argument and/or return a function
        const numbers = [1, 2, 3, 4, 5];

        const doubler = (n: number) => n * 2;
        const doubled = numbers.map(doubler);

        expect(doubled).toEqual([2, 4, 6, 8, 10]);
        expect(numbers).toEqual([1, 2, 3, 4, 5]);

        const payInfo = calculateWeeklyPay(1000, calculateTaxForFullTime);

        expect(payInfo.weeklyPay).toBe(19);
        expect(payInfo.taxableAmount).toBe(4);

        const payInfo2 = calculateWeeklyPay(1000, calculateTaxForContractor);

        expect(payInfo2.weeklyPay).toBe(19);
        expect(payInfo2.taxableAmount).toBe(0);
    });

    test('returning a function', () => {
        const h1Maker = tagMaker('h1');
        const h2Maker = tagMaker('h2');

        expect(h1Maker('hello')).toBe('<h1>hello</h1>');
        expect(h2Maker('goodbye')).toBe('<h2>goodbye</h2>');
        // can also do the above with just 2 args (content and tag)

        const pMaker = new TagMaker('p');

        expect(pMaker.make('weirdo')).toEqual('<p>weirdo</p>');
    });

    test('arrays and tuple types', () => {
        const friends = ['Sean', 'Billy', 'Ed', 'Mo', 1138] as const;

        // let myAssociates: Array<string | number>;
        // let myAssociates: (string | number)[];

        expect(friends[0].length).toBe(4);
        expect(friends[4] * 2).toBe(1138 * 2);
        expect(typeof friends[0]).toBe('string');
        expect(typeof friends[4]).toBe('number');

        type Entry = [number, string, string[]];

        const entry: Entry = [19, 'dog', ['stuff']];
    });
});