import LargestRectangleInHistogram from "../../../../src/01_arrays/leetcode/hard/84_LargestRectangleInHistogram";

describe("LargestRectangleInHistogram", () => {
    test("should return the correct area for a single rectangle", () => {
        expect(LargestRectangleInHistogram([2])).toBe(2);
    });

    test("should return the correct area for multiple rectangles", () => {
        expect(LargestRectangleInHistogram([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    test("should handle an empty array", () => {
        expect(LargestRectangleInHistogram([])).toBe(0);
    });

    test("should handle array with increasing heights", () => {
        expect(LargestRectangleInHistogram([1, 2, 3, 4, 5])).toBe(9);
    });

    test("should handle array with decreasing heights", () => {
        expect(LargestRectangleInHistogram([5, 4, 3, 2, 1])).toBe(9);
    });

    test("should handle array with all equal heights", () => {
        expect(LargestRectangleInHistogram([5, 5, 5, 5])).toBe(20);
    });
});
