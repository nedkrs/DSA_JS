import twoSum from "../../../../src/01_arrays/leetcode/easy/1_TwoSum";

describe("twoSum", () => {
    test("Example 1: nums = [2,7,11,15], target = 9", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const output = [0, 1];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(output));
    });

    test("Example 2: nums = [3,2,4], target = 6", () => {
        const nums = [3, 2, 4];
        const target = 6;
        const output = [1, 2];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(output));
    });

    test("Example 3: nums = [3,3], target = 6", () => {
        const nums = [3, 3];
        const target = 6;
        const output = [0, 1];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(output));
    });

    test("Edge Case: nums = [0, 4, 3, 0], target = 0", () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        const output = [0, 3];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(output));
    });

    test("Edge Case: nums = [-1, -2, -3, -4, -5], target = -8", () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const output = [2, 4];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(output));
    });
});
