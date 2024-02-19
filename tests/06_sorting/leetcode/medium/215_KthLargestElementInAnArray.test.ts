import KthLargestElementInAnArray from "../../../../src/06_sorting/leetcode/medium/215_KthLargestElementInAnArray";

describe("KthLargestElementInAnArray", () => {
    test("finds the 2nd largest element", () => {
        expect(KthLargestElementInAnArray([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    test("handles duplicate elements", () => {
        expect(KthLargestElementInAnArray([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(
            4,
        );
    });

    test("works with an array sorted in ascending order", () => {
        expect(KthLargestElementInAnArray([1, 2, 3, 4, 5, 6], 1)).toBe(6);
    });

    test("works with an array sorted in descending order", () => {
        expect(KthLargestElementInAnArray([6, 5, 4, 3, 2, 1], 6)).toBe(1);
    });

    test("edge case with only one element", () => {
        expect(KthLargestElementInAnArray([1], 1)).toBe(1);
    });

    test("asks for the 1st largest (maximum)", () => {
        expect(KthLargestElementInAnArray([7, 6, 5, 4, 3, 2, 1], 1)).toBe(7);
    });

    test("asks for the last largest (minimum)", () => {
        expect(KthLargestElementInAnArray([7, 6, 5, 4, 3, 2, 1], 7)).toBe(1);
    });

    test("array with negatives", () => {
        expect(KthLargestElementInAnArray([-1, -2, -3, -4, -5], 2)).toBe(-2);
    });

    test("large range of k", () => {
        expect(KthLargestElementInAnArray([3, 2, 1, 5, 6, 4], 6)).toBe(1);
    });

    test("repetitive elements, k in the middle", () => {
        expect(KthLargestElementInAnArray([2, 1, 2, 1, 2], 3)).toBe(2);
    });
});
