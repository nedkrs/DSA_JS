import FindFirstAndLastPositionOfElementInSortedArray from "../../../../src/05_search/leetcode/medium/34_FindFirstAndLastPositionOfElementInSortedArray";

test("target present multiple times", () => {
    expect(
        FindFirstAndLastPositionOfElementInSortedArray([5, 7, 7, 8, 8, 10], 8),
    ).toEqual([3, 4]);
});

test("target present once", () => {
    expect(
        FindFirstAndLastPositionOfElementInSortedArray([5, 7, 7, 8, 8, 10], 5),
    ).toEqual([0, 0]);
});

test("target not present", () => {
    expect(
        FindFirstAndLastPositionOfElementInSortedArray([5, 7, 7, 8, 8, 10], 6),
    ).toEqual([-1, -1]);
});

test("empty array", () => {
    expect(FindFirstAndLastPositionOfElementInSortedArray([], 0)).toEqual([
        -1, -1,
    ]);
});

test("target at the beginning of the array", () => {
    expect(
        FindFirstAndLastPositionOfElementInSortedArray([4, 4, 4, 5, 6, 7], 4),
    ).toEqual([0, 2]);
});

test("target at the end of the array", () => {
    expect(
        FindFirstAndLastPositionOfElementInSortedArray([5, 6, 7, 8, 8, 8], 8),
    ).toEqual([3, 5]);
});
