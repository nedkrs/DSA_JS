import FibonacciNumberBottomUp from "../../../../src/09_dynamic_programming/leetcode/easy/509_FibonacciNumberBottomUp";

describe("FibonacciNumberBottomUp", () => {
    test("base case with 0", () => {
        expect(FibonacciNumberBottomUp(0)).toEqual(0);
    });

    test("base case with 1", () => {
        expect(FibonacciNumberBottomUp(1)).toEqual(1);
    });

    test("typical case with a small Fibonacci number", () => {
        expect(FibonacciNumberBottomUp(5)).toEqual(5);
    });

    test("typical case with a larger Fibonacci number", () => {
        expect(FibonacciNumberBottomUp(10)).toEqual(55);
    });

    test("upper boundary case", () => {
        const result = FibonacciNumberBottomUp(20);
        expect(result).toBeGreaterThan(0);
        expect(result).toEqual(6765);
    });
});
