import PartitionEqualSubsetSumTopDown from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/416_PartitionEqualSubsetSumTopDown";

describe("PartitionEqualSubsetSumTopDown", () => {
    test("can be partitioned into equal sum subsets", () => {
        expect(PartitionEqualSubsetSumTopDown([1, 5, 11, 5])).toBeTruthy();
    });

    test("cannot be partitioned into equal sum subsets", () => {
        expect(PartitionEqualSubsetSumTopDown([1, 2, 3, 5])).toBeFalsy();
    });

    test("single element", () => {
        expect(PartitionEqualSubsetSumTopDown([1])).toBeFalsy();
    });

    test("all elements are the same", () => {
        expect(PartitionEqualSubsetSumTopDown([2, 2, 2, 2])).toBeTruthy();
    });

    test("large numbers", () => {
        expect(
            PartitionEqualSubsetSumTopDown([100, 200, 300, 400]),
        ).toBeTruthy();
    });

    test("array with both even and odd sum", () => {
        expect(PartitionEqualSubsetSumTopDown([3, 1, 5, 9])).toBeTruthy();
    });
});
