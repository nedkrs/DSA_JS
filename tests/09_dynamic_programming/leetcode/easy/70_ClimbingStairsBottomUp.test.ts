import ClimbingStairsBottomUp from "../../../../src/09_dynamic_programming/leetcode/easy/70_ClimbingStairsBottomUp";

describe("ClimbingStairsBottomUp", () => {
    test("base case with 1 step", () => {
        expect(ClimbingStairsBottomUp(1)).toEqual(1);
    });

    test("small number of steps", () => {
        expect(ClimbingStairsBottomUp(4)).toEqual(5);
    });

    test("larger number of steps", () => {
        expect(ClimbingStairsBottomUp(5)).toEqual(8);
    });

    test("upper boundary case", () => {
        expect(ClimbingStairsBottomUp(45)).toBeGreaterThan(0);
    });
});
