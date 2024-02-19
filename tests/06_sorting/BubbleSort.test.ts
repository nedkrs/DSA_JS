import bubble_sort from "../../src/06_sorting/BubbleSort";

test("bubble-sort", function () {
    const arr = [5, 2, 8, 1, 7, 4, 6, 3];
    bubble_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
