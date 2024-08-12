export function sumThem(a: number, b: number): number;
export function sumThem(a: string, b: string): number;
export function sumThem(a: number[], b: number[]): number;

export function sumThem(a: unknown, b: unknown) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b].reduce((l, r) => l + r);
    }
    return -42;
}

type SummableItems = number | string | number[];
export function sumThemWithUnions (a: SummableItems, b: SummableItems) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b].reduce((l, r) => l + r);
    }
    return -42;
}