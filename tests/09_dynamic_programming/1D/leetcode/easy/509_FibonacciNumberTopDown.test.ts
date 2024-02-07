import FibonacciNumberTopDown from "../../../../../src/09_dynamic_programming/1D/leetcode/easy/509_FibonacciNumberTopDown";

describe("FibonacciNumberTopDown", () => {
    test("base case with 0", () => {
        expect(FibonacciNumberTopDown(0)).toEqual(0);
    });

    test("base case with 1", () => {
        expect(FibonacciNumberTopDown(1)).toEqual(1);
    });

    test("typical case with a small Fibonacci number", () => {
        expect(FibonacciNumberTopDown(5)).toEqual(5);
    });

    test("typical case with a larger Fibonacci number", () => {
        expect(FibonacciNumberTopDown(10)).toEqual(55);
    });

    test("upper boundary case", () => {
        const result = FibonacciNumberTopDown(20);
        expect(result).toBeGreaterThan(0);
        expect(result).toEqual(6765);
    });
});
