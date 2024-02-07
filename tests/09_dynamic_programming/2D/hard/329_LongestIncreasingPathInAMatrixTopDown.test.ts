import LongestIncreasingPathTopDown from "../../../../src/09_dynamic_programming/2D/leetcode/hard/329_LongestIncreasingPathInAMatrixTopDown";

test("basic test", () => {
    expect(LongestIncreasingPathTopDown([[1]])).toBe(1);
});

test("single path longest", () => {
    expect(
        LongestIncreasingPathTopDown([
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1],
        ]),
    ).toBe(4);
});

test("empty matrix", () => {
    expect(LongestIncreasingPathTopDown([])).toBe(0);
});

test("all elements equal", () => {
    expect(
        LongestIncreasingPathTopDown([
            [7, 7],
            [7, 7],
        ]),
    ).toBe(1);
});

test("complex case", () => {
    expect(
        LongestIncreasingPathTopDown([
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1],
        ]),
    ).toBe(4);
});

test("boundary path longest", () => {
    expect(
        LongestIncreasingPathTopDown([
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ]),
    ).toBe(16);
});
