import Subsets2 from "../../../../../src/14_combinatorics/subsets/leetcode/medium/90_Subsets2";

describe("Subsets2", () => {
    test("nums = [1,2,2]", () => {
        expect(Subsets2([1, 2, 2])).toEqual(
            expect.arrayContaining([[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]),
        );
    });

    test("nums = [0]", () => {
        expect(Subsets2([0])).toEqual(expect.arrayContaining([[], [0]]));
    });

    test("nums = [1,2,2,3]", () => {
        expect(Subsets2([1, 2, 2, 3])).toEqual(
            expect.arrayContaining([
                [],
                [1],
                [2],
                [3],
                [1, 2],
                [1, 3],
                [2, 3],
                [1, 2, 2],
                [1, 2, 3],
                [2, 2],
                [2, 2, 3],
                [1, 2, 2, 3],
            ]),
        );
    });

    test("nums = [2,2,2]", () => {
        expect(Subsets2([2, 2, 2])).toEqual(
            expect.arrayContaining([[], [2], [2, 2], [2, 2, 2]]),
        );
    });

    test("nums = [-1,0,1,2]", () => {
        expect(Subsets2([-1, 0, 1, 2])).toEqual(
            expect.arrayContaining([
                [],
                [-1],
                [0],
                [1],
                [2],
                [-1, 0],
                [-1, 1],
                [-1, 2],
                [0, 1],
                [0, 2],
                [1, 2],
                [-1, 0, 1],
                [-1, 0, 2],
                [-1, 1, 2],
                [0, 1, 2],
                [-1, 0, 1, 2],
            ]),
        );
    });
});
