// Just a source code file that exports 1 or more things
const logIt = (msg: string) => console.log(msg);

let callCount = 0;

export const sumIt = (a: number, b: number) => add(a, b);

export function add(a: number, b: number, ...otherNumbers: number[]) {
    const sum = otherNumbers.reduce((l, r) => l + r, a + b);
    logIt(sum.toString());
    return sum;
}

export const doubleAndSumIt = (a: number, b: number) => {
    const result = sumIt(a + a, b + b);
    callCount++; // captured in here - it "closes around it" - "closure"
    logIt(`They did doubleAndSumIt ${result} (call count is ${callCount})`);
}