import RemoveDuplicatesFromSortedArray from "../../../../src/01_arrays/leetcode/easy/26_RemoveDuplicatesFromSortedArray";

describe("RemoveDuplicatesFromSortedArray", () => {
    test("removes duplicates from a sorted array", () => {
        const nums = [1, 1, 2];
        const expectedLength = 2;
        const result = RemoveDuplicatesFromSortedArray(nums);
        expect(result).toBe(expectedLength);
        expect(nums.slice(0, result)).toEqual([1, 2]);
    });

    test("handles array with multiple duplicates", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedLength = 5;
        const result = RemoveDuplicatesFromSortedArray(nums);
        expect(result).toBe(expectedLength);
        expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
    });

    test("handles array without duplicates", () => {
        const nums = [1, 2, 3, 4];
        const expectedLength = 4;
        const result = RemoveDuplicatesFromSortedArray(nums);
        expect(result).toBe(expectedLength);
        expect(nums.slice(0, result)).toEqual([1, 2, 3, 4]);
    });

    test("handles array with a single element", () => {
        const nums = [1];
        const expectedLength = 1;
        const result = RemoveDuplicatesFromSortedArray(nums);
        expect(result).toBe(expectedLength);
        expect(nums.slice(0, result)).toEqual([1]);
    });
});
