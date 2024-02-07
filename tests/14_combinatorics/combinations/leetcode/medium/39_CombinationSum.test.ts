import CombinationSum from "../../../../../src/14_combinatorics/combinations/leetcode/medium/39_CombinationSum";

describe("CombinationSum", () => {
    test("candidates = [2,3,6,7], target = 7", () => {
        expect(CombinationSum([2, 3, 6, 7], 7)).toEqual(
            expect.arrayContaining([[7], [2, 2, 3]]),
        );
    });

    test("candidates = [2,3,5], target = 8", () => {
        expect(CombinationSum([2, 3, 5], 8)).toEqual(
            expect.arrayContaining([
                [2, 2, 2, 2],
                [2, 3, 3],
                [3, 5],
            ]),
        );
    });

    test("candidates = [2], target = 1", () => {
        expect(CombinationSum([2], 1)).toEqual([]);
    });

    test("candidates = [2,3,5], target = 5", () => {
        expect(CombinationSum([2, 3, 5], 5)).toEqual(
            expect.arrayContaining([[5], [2, 3]]),
        );
    });

    test("candidates = [1], target = 2", () => {
        expect(CombinationSum([1], 2)).toEqual([[1, 1]]);
    });

    test("no possible combinations", () => {
        expect(CombinationSum([2, 5, 10], 1)).toEqual([]);
    });

    test("candidates = [4,2,8], target = 8", () => {
        expect(CombinationSum([4, 2, 8], 8)).toEqual(
            expect.arrayContaining([[2, 2, 2, 2], [4, 4], [8]]),
        );
    });
});
