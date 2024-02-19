import SearchInRotatedSortedArray from "../../../../src/05_search/leetcode/medium/33_SearchInRotatedSortedArray";

test("finds element in rotated array (left half)", () => {
    expect(SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
});

test("finds element in rotated array (right half)", () => {
    expect(SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 1)).toBe(5);
});

test("finds element in non-rotated array", () => {
    expect(SearchInRotatedSortedArray([1, 2, 3, 4, 5, 6], 4)).toBe(3);
});

test("returns -1 if element not found in rotated array", () => {
    expect(SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("returns -1 if element not found in non-rotated array", () => {
    expect(SearchInRotatedSortedArray([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
});

test("works with an array of length 1", () => {
    expect(SearchInRotatedSortedArray([1], 1)).toBe(0);
});

test("returns -1 for empty array", () => {
    expect(SearchInRotatedSortedArray([], 1)).toBe(-1);
});
