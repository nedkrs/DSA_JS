import MedianOfTwoSortedArrays from "../../../../src/05_search/leetcode/hard/4_MedianOfTwoSortedArrays";

describe("MedianOfTwoSortedArrays", () => {
    test("finds median of two sorted arrays of equal length", () => {
        expect(MedianOfTwoSortedArrays([1, 3], [2, 4])).toBe(2.5);
    });

    test("finds median of two sorted arrays when one is longer", () => {
        expect(MedianOfTwoSortedArrays([1, 2], [3, 4, 5])).toBe(3);
    });

    test("handles arrays with overlapping elements", () => {
        expect(MedianOfTwoSortedArrays([1, 2, 3], [1, 2, 3])).toBe(2);
    });

    test("handles arrays with non-overlapping elements", () => {
        expect(MedianOfTwoSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });

    test("works with empty arrays", () => {
        expect(MedianOfTwoSortedArrays([], [1])).toBe(1);
        expect(MedianOfTwoSortedArrays([], [2, 3])).toBe(2.5);
    });

    test("works with arrays containing zeros", () => {
        expect(MedianOfTwoSortedArrays([0, 0], [0, 0])).toBe(0);
    });

    test("works with arrays containing negative numbers", () => {
        expect(MedianOfTwoSortedArrays([-5, -3, -1], [-2, 0, 2])).toBe(-1.5);
    });
});
