import radix_sort from "../../src/06_sorting/RadixSort";

test("radix_sort", function () {
    expect(radix_sort([5, 2, 8, 1, 3, 7, 3, 4, 3, 6, 3])).toEqual([
        1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8,
    ]);

    expect(radix_sort([109, 224, 901, 58])).toEqual([58, 109, 224, 901]);

    expect(radix_sort([170, 45, 75, 90, 2, 12000, 802, 2, 66])).toEqual([
        2, 2, 45, 66, 75, 90, 170, 802, 12000,
    ]);
});
