import bucket_sort from "../src/BucketSort";

test("bucket_sort", function () {
    let arr = [
        0, 74, 21, 42, 67, 93, 63, 79, 25, 87, 36, 60, 12, 58, 47, 80, 57, 28,
        14, 39, 93, 11, 86, 96, 76, 59, 40, 60, 31, 58, 66, 57, 94, 0, 43, 49,
        71, 75, 5, 62, 50, 58, 19, 68, 96, 63, 15, 75, 32, 65, 99, 74, 90, 96,
        16, 55, 45, 4, 82, 57, 83, 99, 78, 34, 83, 91, 53, 81, 28, 99, 15, 0,
        20, 56, 43, 8, 9, 58, 5, 18, 15, 75, 84, 43, 4, 85, 48, 23, 10, 49, 32,
        83, 33, 51, 15, 90, 16, 53, 27, 66,
    ];

    expect(bucket_sort(arr)).toEqual([
        0, 0, 0, 4, 4, 5, 5, 8, 9, 10, 11, 12, 14, 15, 15, 15, 15, 16, 16, 18,
        19, 20, 21, 23, 25, 27, 28, 28, 31, 32, 32, 33, 34, 36, 39, 40, 42, 43,
        43, 43, 45, 47, 48, 49, 49, 50, 51, 53, 53, 55, 56, 57, 57, 57, 58, 58,
        58, 58, 59, 60, 60, 62, 63, 63, 65, 66, 66, 67, 68, 71, 74, 74, 75, 75,
        75, 76, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 90, 90, 91, 93,
        93, 94, 96, 96, 96, 99, 99, 99,
    ]);
});
