import median_of_medians from "../../src/15_order_statistics/MedianOfMedians";

test("median_of_medians", function () {
    const arr1 = [5, 2, 8, 1, 3, 7, 3, 4, 3, 6, 3];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let kth = median_of_medians(arr1, 3);
    expect(kth).toEqual(3);

    kth = median_of_medians(arr2, 3);
    expect(kth).toEqual(3);

    kth = median_of_medians(arr1, 11);
    expect(kth).toEqual(8);
});
