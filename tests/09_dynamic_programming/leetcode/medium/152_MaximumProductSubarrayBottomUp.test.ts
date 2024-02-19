import MaximumProductSubarrayBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/152_MaximumProductSubarrayBottomUp";

describe("MaximumProductSubarrayBottomUp", () => {
    test("positive numbers", () => {
        expect(MaximumProductSubarrayBottomUp([2, 3, 4])).toEqual(24);
    });

    test("negative and positive numbers", () => {
        expect(MaximumProductSubarrayBottomUp([2, -3, 4, -1])).toEqual(24);
    });

    test("array with zeros", () => {
        expect(MaximumProductSubarrayBottomUp([0, -2, 0, -3])).toEqual(0);
    });

    test("single negative number", () => {
        expect(MaximumProductSubarrayBottomUp([-3])).toEqual(-3);
    });
});
