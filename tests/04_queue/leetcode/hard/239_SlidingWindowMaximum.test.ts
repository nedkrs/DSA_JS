import SlidingWindowMaximum from "../../../../src/04_queue/leetcode/hard/239_SlidingWindowMaximum";

describe("SlidingWindowMaximum", () => {
    test("should return the maximum values in each sliding window of size k", () => {
        expect(SlidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
            3, 3, 5, 5, 6, 7,
        ]);
    });

    test("should handle a single element with k=1", () => {
        expect(SlidingWindowMaximum([2], 1)).toEqual([2]);
    });

    test("should handle an empty array", () => {
        expect(SlidingWindowMaximum([], 3)).toEqual([]);
    });

    test("should handle array where all elements are the same", () => {
        expect(SlidingWindowMaximum([4, 4, 4, 4], 2)).toEqual([4, 4, 4]);
    });
});
