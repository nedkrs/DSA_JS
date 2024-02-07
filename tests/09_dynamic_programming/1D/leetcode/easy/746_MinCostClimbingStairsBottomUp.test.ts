import MinCostClimbingStairsBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/easy/746_MinCostClimbingStairsBottomUp";

describe("MinCostClimbingStairsBottomUp", () => {
    test("typical case", () => {
        const cost = [10, 15, 20];
        expect(MinCostClimbingStairsBottomUp(cost)).toEqual(15);
    });

    test("case with multiple steps", () => {
        const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(MinCostClimbingStairsBottomUp(cost)).toEqual(6);
    });

    test("small case with two steps", () => {
        const cost = [5, 10];
        expect(MinCostClimbingStairsBottomUp(cost)).toEqual(5);
    });

    test("empty array", () => {
        expect(MinCostClimbingStairsBottomUp([])).toEqual(0);
    });

    test("large array case", () => {
        const cost = new Array(1000).fill(1);
        expect(MinCostClimbingStairsBottomUp(cost)).toBeLessThanOrEqual(1000);
    });
});
