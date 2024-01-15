import merge_sort from "../src/MergeSort";

test("merge_sort", function () {
    const arr = [5, 2, 8, 1, 3, 7, 3, 4, 3, 6, 3];
    const sorted = merge_sort(arr);
    expect(sorted).toEqual([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]);
});
