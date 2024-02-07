import PartitionEqualSubsetSumBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/416_PartitionEqualSubsetSumBottomUp";

describe("PartitionEqualSubsetSumBottomUp", () => {
    test("can be partitioned into equal sum subsets", () => {
        expect(PartitionEqualSubsetSumBottomUp([1, 5, 11, 5])).toBeTruthy();
    });

    test("cannot be partitioned into equal sum subsets", () => {
        expect(PartitionEqualSubsetSumBottomUp([1, 2, 3, 5])).toBeFalsy();
    });

    test("single element", () => {
        expect(PartitionEqualSubsetSumBottomUp([1])).toBeFalsy();
    });

    test("all elements are the same", () => {
        expect(PartitionEqualSubsetSumBottomUp([2, 2, 2, 2])).toBeTruthy();
    });

    test("large numbers", () => {
        expect(
            PartitionEqualSubsetSumBottomUp([100, 200, 300, 400]),
        ).toBeTruthy();
    });

    test("array with both even and odd sum", () => {
        expect(PartitionEqualSubsetSumBottomUp([3, 1, 5, 9])).toBeTruthy();
    });
});
