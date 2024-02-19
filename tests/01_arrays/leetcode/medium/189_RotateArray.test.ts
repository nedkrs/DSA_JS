import RotateArray from "../../../../src/01_arrays/leetcode/medium/189_RotateArray";

describe("RotateArray", () => {
    test("rotates array by k steps", () => {
        let nums = [1, 2, 3, 4, 5, 6, 7];
        RotateArray(nums, 3);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    test("rotates array by k steps where k is larger than array length", () => {
        let nums = [1, 2, 3];
        RotateArray(nums, 4);
        expect(nums).toEqual([3, 1, 2]);
    });

    test("handles array with one element", () => {
        let nums = [1];
        RotateArray(nums, 10);
        expect(nums).toEqual([1]);
    });

    test("handles empty array", () => {
        let nums: number[] = [];
        RotateArray(nums, 3);
        expect(nums).toEqual([]);
    });

    test("rotates array by k steps where k is zero", () => {
        let nums = [1, 2, 3, 4, 5];
        RotateArray(nums, 0);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    test("rotates array by k steps where k is equal to array length", () => {
        let nums = [1, 2, 3, 4];
        RotateArray(nums, 4);
        expect(nums).toEqual([1, 2, 3, 4]);
    });
});
