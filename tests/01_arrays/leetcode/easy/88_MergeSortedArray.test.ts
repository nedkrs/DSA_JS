import MergeSortedArray from "../../../../src/01_arrays/leetcode/easy/88_MergeSortedArray";

describe("MergeSortedArray", () => {
    test("merges two non-empty arrays", () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;
        const expected = [1, 2, 2, 3, 5, 6];
        MergeSortedArray(nums1, m, nums2, n);
        expect(nums1).toEqual(expected);
    });

    test("merges when the first array is empty", () => {
        const nums1 = [0, 0, 0];
        const m = 0;
        const nums2 = [2, 5, 6];
        const n = 3;
        const expected = [2, 5, 6];
        MergeSortedArray(nums1, m, nums2, n);
        expect(nums1).toEqual(expected);
    });

    test("merges when the second array is empty", () => {
        const nums1 = [1, 2, 3];
        const m = 3;
        const nums2: number[] = [];
        const n = 0;
        const expected = [1, 2, 3];
        MergeSortedArray(nums1, m, nums2, n);
        expect(nums1).toEqual(expected);
    });

    test("merges with arrays of different lengths", () => {
        const nums1 = [1, 2, 4, 5, 6, 0, 0, 0];
        const m = 5;
        const nums2 = [3, 7, 8];
        const n = 3;
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        MergeSortedArray(nums1, m, nums2, n);
        expect(nums1).toEqual(expected);
    });

    test("handles negative numbers", () => {
        const nums1 = [-1, 0, 0, 3, 3, 0, 0, 0, 0];
        const m = 5;
        const nums2 = [-2, -1, 2, 2];
        const n = 4;
        const expected = [-2, -1, -1, 0, 0, 2, 2, 3, 3];
        MergeSortedArray(nums1, m, nums2, n);
        expect(nums1).toEqual(expected);
    });
});
