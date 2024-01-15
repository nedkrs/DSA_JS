import quick_sort from "../src/QuickSort";

test("quick_sort", function () {
    const arr = [5, 2, 8, 1, 3, 7, 3, 4, 3, 6, 3];
    quick_sort(arr);
    expect(arr).toEqual([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]);
});
