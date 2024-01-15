import quick_select from "../src/QuickSelect";

test("quick_sort", function () {
    const arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9];

    let kth = quick_select(arr, 3);
    expect(kth).toEqual(3);

    kth = quick_select(arr, 1);
    expect(kth).toEqual(1);

    kth = quick_select(arr, 9);
    expect(kth).toEqual(7);

    kth = quick_select(arr, 11);
    expect(kth).toEqual(9);

    kth = quick_select(arr, 4);
    expect(kth).toEqual(4);

    kth = quick_select(arr, 5);
    expect(kth).toEqual(4);

    kth = quick_select(arr, 6);
    expect(kth).toEqual(4);
});
