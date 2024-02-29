import LongestConsecutiveSequence from "../../../../src/01_arrays/leetcode/medium/128_LongestConsecutiveSequence";

describe("LongestConsecutiveSequence", () => {
    test("empty array returns 0", () => {
        expect(LongestConsecutiveSequence([])).toBe(0);
    });

    test("array with no consecutive numbers returns 1", () => {
        expect(LongestConsecutiveSequence([1, 3, 5, 7, 9])).toBe(1);
    });

    test("array with consecutive numbers returns correct length", () => {
        expect(LongestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
    });

    test("array with negative numbers and consecutive numbers returns correct length", () => {
        expect(LongestConsecutiveSequence([-2, -3, -1, 0, 1])).toBe(5);
    });

    test("array with duplicates and consecutive numbers returns correct length", () => {
        expect(LongestConsecutiveSequence([1, 2, 2, 3, 4])).toBe(4);
    });

    test("array with multiple consecutive sequences returns length of longest sequence", () => {
        expect(
            LongestConsecutiveSequence([10, 5, 12, 3, 55, 30, 4, 11, 2]),
        ).toBe(4);
    });
});
