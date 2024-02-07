import ClimbingStairsTopDown from "../../../../../src/09_dynamic_programming/1D/leetcode/easy/70_ClimbingStairsTopDown";

describe("ClimbingStairsBottomUp", () => {
    test("base case with 1 step", () => {
        expect(ClimbingStairsTopDown(1)).toEqual(1);
    });

    test("small number of steps", () => {
        expect(ClimbingStairsTopDown(4)).toEqual(5);
    });

    test("larger number of steps", () => {
        expect(ClimbingStairsTopDown(5)).toEqual(8);
    });

    test("upper boundary case", () => {
        expect(ClimbingStairsTopDown(45)).toBeGreaterThan(0);
    });
});
