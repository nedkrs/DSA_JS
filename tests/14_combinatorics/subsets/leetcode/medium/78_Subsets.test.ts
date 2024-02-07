import Subsets from "../../../../../src/14_combinatorics/subsets/leetcode/medium/78_Subsets";

describe("Subsets", () => {
    test("nums = [1,2,3]", () => {
        expect(Subsets([1, 2, 3])).toEqual(
            expect.arrayContaining([
                [],
                [1],
                [2],
                [1, 2],
                [3],
                [1, 3],
                [2, 3],
                [1, 2, 3],
            ]),
        );
    });

    test("nums = [0]", () => {
        expect(Subsets([0])).toEqual(expect.arrayContaining([[], [0]]));
    });

    test("nums = [1,2]", () => {
        expect(Subsets([1, 2])).toEqual(
            expect.arrayContaining([[], [1], [2], [1, 2]]),
        );
    });

    test("nums = [1,2,3,4]", () => {
        expect(Subsets([1, 2, 3, 4]).length).toBe(16);
    });

    test("nums = [-1,0,1]", () => {
        expect(Subsets([-1, 0, 1])).toEqual(
            expect.arrayContaining([
                [],
                [-1],
                [0],
                [-1, 0],
                [1],
                [-1, 1],
                [0, 1],
                [-1, 0, 1],
            ]),
        );
    });
});
