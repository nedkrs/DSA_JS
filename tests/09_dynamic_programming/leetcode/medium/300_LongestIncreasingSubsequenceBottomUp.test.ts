import LongestIncreasingSubsequenceBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/300_LongestIncreasingSubsequenceBottomUp";

describe("LongestIncreasingSubsequenceBottomUp", () => {
    test("typical case", () => {
        expect(
            LongestIncreasingSubsequenceBottomUp([10, 9, 2, 5, 3, 7, 101, 18]),
        ).toEqual(4);
    });

    test("increasing sequence", () => {
        expect(LongestIncreasingSubsequenceBottomUp([1, 2, 3, 4])).toEqual(4);
    });

    test("decreasing sequence", () => {
        expect(LongestIncreasingSubsequenceBottomUp([4, 3, 2, 1])).toEqual(1);
    });

    test("all elements are the same", () => {
        expect(LongestIncreasingSubsequenceBottomUp([2, 2, 2, 2])).toEqual(1);
    });

    test("single element", () => {
        expect(LongestIncreasingSubsequenceBottomUp([1])).toEqual(1);
    });

    test("long non-sequential increasing subsequence", () => {
        expect(
            LongestIncreasingSubsequenceBottomUp([
                0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15,
            ]),
        ).toEqual(6);
    });
});
