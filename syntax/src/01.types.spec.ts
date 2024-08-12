import { describe, test, expect } from 'vitest';
describe('Opting into type checking', () => {
    test('Uninitialized is Any', () => {
        let age;
        age = 13;

        age = 'Old';
    });

    test('Initialize and the type is inferred', () => {
        let age = 13;

        age = 14;
        expect(typeof age).toBe('number');

        // @ts-expect-error
        age = 'Old';
        expect(typeof age).toBe('string');
    });

    test('uninitialized should have an annotation', () => {
        let age: number;
        age = 13;

        // @ts-expect-error
        age = 'Old';
    });

    test('union type annotation', () => {
        let age: number | string = 13;

        age = 'Old';
    });
});
