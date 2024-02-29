import MergeIntervals from "../../../../src/01_arrays/leetcode/medium/56_MergeIntervals";

describe("MergeIntervals", () => {
    test("merges overlapping intervals", () => {
        expect(
            MergeIntervals([
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18],
            ]),
        ).toEqual([
            [1, 6],
            [8, 10],
            [15, 18],
        ]);
    });

    test("returns the same intervals when there are no overlaps", () => {
        expect(
            MergeIntervals([
                [1, 2],
                [3, 4],
                [5, 6],
            ]),
        ).toEqual([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    });

    test("merges intervals when all intervals overlap", () => {
        expect(
            MergeIntervals([
                [1, 4],
                [2, 5],
                [3, 6],
            ]),
        ).toEqual([[1, 6]]);
    });

    test("handles single interval input", () => {
        expect(MergeIntervals([[1, 3]])).toEqual([[1, 3]]);
    });

    test("merges intervals that are contained within each other", () => {
        expect(
            MergeIntervals([
                [1, 5],
                [2, 3],
            ]),
        ).toEqual([[1, 5]]);
    });

    test("handles empty input", () => {
        expect(MergeIntervals([])).toEqual([]);
    });

    test("merges multiple overlapping intervals into one", () => {
        expect(
            MergeIntervals([
                [1, 4],
                [4, 5],
                [2, 3],
            ]),
        ).toEqual([[1, 5]]);
    });

    test("handles intervals that just touch each other", () => {
        expect(
            MergeIntervals([
                [1, 2],
                [2, 3],
                [3, 4],
            ]),
        ).toEqual([[1, 4]]);
    });
});
