import heap_sort from "../src/HeapSort";

test("heap_sort", function () {
    const arr = [5, 2, 8, 1, 7, 4, 6, 3];
    let sorted = heap_sort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
