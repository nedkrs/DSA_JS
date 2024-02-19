import TopKFrequentElements from "../../../../src/05_search/leetcode/medium/347_TopKFrequentElements";

describe("TopKFrequentElements", () => {
    test("finds top k frequent elements in a small array", () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = 2;
        const expected = [1, 2];
        const result = TopKFrequentElements(nums, k);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test("finds top k frequent elements when all elements are the same", () => {
        const nums = [1, 1, 1, 1];
        const k = 1;
        const expected = [1];
        const result = TopKFrequentElements(nums, k);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test("finds top k frequent elements in a larger array", () => {
        const nums = [4, 1, -1, 2, -1, 2, 3];
        const k = 2;
        const expected = [-1, 2];
        const result = TopKFrequentElements(nums, k);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test("handles the case where k is equal to the number of distinct elements", () => {
        const nums = [5, 5, 5, 8, 8, 9, 9, 9];
        const k = 3;
        const expected = [5, 8, 9];
        const result = TopKFrequentElements(nums, k);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test("returns an empty array when the input array is empty", () => {
        const nums: number[] = [];
        const k = 0;
        const expected: number[] = [];
        const result = TopKFrequentElements(nums, k);
        expect(result).toEqual(expected);
    });
});
