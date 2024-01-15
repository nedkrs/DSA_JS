import select_sort from "../src/SelectSort";

test("select_sort", function () {
    const arr = [5, 2, 8, 1, 7, 4, 6, 3];
    select_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
