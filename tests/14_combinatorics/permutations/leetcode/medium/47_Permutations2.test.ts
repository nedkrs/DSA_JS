import Permutations2 from "../../../../../src/14_combinatorics/permutations/leetcode/medium/47_Permutations2";

describe("Permutations2", () => {
    test("nums = [1,1,2]", () => {
        expect(Permutations2([1, 1, 2])).toEqual(
            expect.arrayContaining([
                [1, 1, 2],
                [1, 2, 1],
                [2, 1, 1],
            ]),
        );
    });

    test("nums = [1,2,3]", () => {
        expect(Permutations2([1, 2, 3])).toEqual(
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

    test("nums = [1,2,2]", () => {
        expect(Permutations2([1, 2, 2])).toEqual(
            expect.arrayContaining([
                [1, 2, 2],
                [2, 1, 2],
                [2, 2, 1],
            ]),
        );
    });

    test("nums = [2,2,2]", () => {
        expect(Permutations2([2, 2, 2])).toEqual([[2, 2, 2]]);
    });

    test("nums = [1,2,2,3]", () => {
        expect(Permutations2([1, 2, 2, 3]).length).toBe(12);
    });
});
