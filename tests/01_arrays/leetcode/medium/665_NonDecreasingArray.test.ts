import NonDecreasingArray from "../../../../src/01_arrays/leetcode/medium/665_NonDecreasingArray";

describe("NonDecreasingArray", () => {
    test("can become non-decreasing by modifying at most one element", () => {
        expect(NonDecreasingArray([4, 2, 3])).toBe(true);
    });

    test("cannot become non-decreasing by modifying at most one element", () => {
        expect(NonDecreasingArray([4, 2, 1])).toBe(false);
    });

    test("no modification needed for already non-decreasing array", () => {
        expect(NonDecreasingArray([1, 2, 3, 4])).toBe(true);
    });

    test("one modification at the end of the array", () => {
        expect(NonDecreasingArray([1, 2, 3, 0])).toBe(true);
    });

    test("handling edge case with two potential modifications needed", () => {
        expect(NonDecreasingArray([3, 4, 2, 3])).toBe(false);
    });

    test("large array with no modifications needed", () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i);
        expect(NonDecreasingArray(largeArray)).toBe(true);
    });

    test("large array with exactly one modification needed", () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i);
        largeArray[5000] = 1;
        expect(NonDecreasingArray(largeArray)).toBe(true);
    });

    test("empty array and single element array are trivially non-decreasing", () => {
        expect(NonDecreasingArray([])).toBe(true);
        expect(NonDecreasingArray([1])).toBe(true);
    });
});
