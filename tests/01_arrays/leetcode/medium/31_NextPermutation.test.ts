import NextPermutation from "../../../../src/01_arrays/leetcode/medium/31_NextPermutation";

describe("NextPermutation", () => {
    test("next permutation of [1,2,3] to equal [1,3,2]", () => {
        const nums = [1, 2, 3];
        NextPermutation(nums);
        expect(nums).toEqual([1, 3, 2]);
    });

    test("next permutation of [3,2,1] to equal [1,2,3]", () => {
        const nums = [3, 2, 1];
        NextPermutation(nums);
        expect(nums).toEqual([1, 2, 3]);
    });

    test("next permutation of [1,1,5] to equal [1,5,1]", () => {
        const nums = [1, 1, 5];
        NextPermutation(nums);
        expect(nums).toEqual([1, 5, 1]);
    });

    test("next permutation of [1] to equal [1]", () => {
        const nums = [1];
        NextPermutation(nums);
        expect(nums).toEqual([1]);
    });

    test("next permutation of [1,3,2] to equal [2,1,3]", () => {
        const nums = [1, 3, 2];
        NextPermutation(nums);
        expect(nums).toEqual([2, 1, 3]);
    });

    test("next permutation of [2,3,1] to equal [3,1,2]", () => {
        const nums = [2, 3, 1];
        NextPermutation(nums);
        expect(nums).toEqual([3, 1, 2]);
    });
});
