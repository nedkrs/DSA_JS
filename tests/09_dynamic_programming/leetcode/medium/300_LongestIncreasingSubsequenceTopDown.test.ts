import LongestIncreasingSubsequenceTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/300_LongestIncreasingSubsequenceTopDown";

describe("LongestIncreasingSubsequenceTopDown", () => {
    test("typical case", () => {
        expect(
            LongestIncreasingSubsequenceTopDown([10, 9, 2, 5, 3, 7, 101, 18]),
        ).toEqual(4);
    });

    test("increasing sequence", () => {
        expect(LongestIncreasingSubsequenceTopDown([1, 2, 3, 4])).toEqual(4);
    });

    test("decreasing sequence", () => {
        expect(LongestIncreasingSubsequenceTopDown([4, 3, 2, 1])).toEqual(1);
    });

    test("all elements are the same", () => {
        expect(LongestIncreasingSubsequenceTopDown([2, 2, 2, 2])).toEqual(1);
    });

    test("single element", () => {
        expect(LongestIncreasingSubsequenceTopDown([1])).toEqual(1);
    });

    test("long non-sequential increasing subsequence", () => {
        expect(
            LongestIncreasingSubsequenceTopDown([
                0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15,
            ]),
        ).toEqual(6);
    });
});
