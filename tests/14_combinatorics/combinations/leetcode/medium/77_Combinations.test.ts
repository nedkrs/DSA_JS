import Combinations from "../../../../../src/14_combinatorics/combinations/leetcode/medium/77_Combinations";

describe("Combinations", () => {
    test("n=4 k=2", () => {
        expect(Combinations(4, 2)).toEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 3],
                [2, 4],
                [3, 4],
            ]),
        );
    });

    test("n=1 k=1", () => {
        expect(Combinations(1, 1)).toEqual([[1]]);
    });

    test("n=5 k=3", () => {
        expect(Combinations(5, 3)).toEqual(
            expect.arrayContaining([
                [1, 2, 3],
                [1, 2, 4],
                [1, 2, 5],
                [1, 3, 4],
                [1, 3, 5],
                [1, 4, 5],
                [2, 3, 4],
                [2, 3, 5],
                [2, 4, 5],
                [3, 4, 5],
            ]),
        );
    });

    test("n=3 k=2", () => {
        expect(Combinations(3, 2)).toEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 3],
                [2, 3],
            ]),
        );
    });

    test("n=4 k=4", () => {
        expect(Combinations(4, 4)).toEqual([[1, 2, 3, 4]]);
    });
});
