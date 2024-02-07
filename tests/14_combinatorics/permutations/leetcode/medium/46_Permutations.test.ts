import Permutations from "../../../../../src/14_combinatorics/permutations/leetcode/medium/46_Permutations";

describe("Permutations", () => {
    test("nums = [1,2,3]", () => {
        expect(Permutations([1, 2, 3])).toEqual(
            expect.arrayContaining([
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1],
            ]),
        );
    });

    test("nums = [0,1]", () => {
        expect(Permutations([0, 1])).toEqual(
            expect.arrayContaining([
                [0, 1],
                [1, 0],
            ]),
        );
    });

    test("nums = [1]", () => {
        expect(Permutations([1])).toEqual([[1]]);
    });

    test("nums = [1,2,3,4]", () => {
        expect(Permutations([1, 2, 3, 4]).length).toBe(24);
    });

    test("nums = [-1,0,1]", () => {
        expect(Permutations([-1, 0, 1])).toEqual(
            expect.arrayContaining([
                [-1, 0, 1],
                [-1, 1, 0],
                [0, -1, 1],
                [0, 1, -1],
                [1, -1, 0],
                [1, 0, -1],
            ]),
        );
    });
});
