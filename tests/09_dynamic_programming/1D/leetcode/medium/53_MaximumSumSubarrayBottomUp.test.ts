import MaximumSumSubarrayBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/53_MaximumSumSubarrayBottomUp";

describe("MaximumSumSubarrayBottomUp", () => {
    test("mixed positive and negative numbers", () => {
        expect(
            MaximumSumSubarrayBottomUp([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
        ).toEqual(6);
    });

    test("all positive numbers", () => {
        expect(MaximumSumSubarrayBottomUp([1, 2, 3, 4])).toEqual(10);
    });

    test("all negative numbers", () => {
        expect(MaximumSumSubarrayBottomUp([-1, -2, -3, -4])).toEqual(-1);
    });

    test("single element", () => {
        expect(MaximumSumSubarrayBottomUp([5])).toEqual(5);
    });
});
