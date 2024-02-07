import GeneratePermutations from "../../../src/14_combinatorics/permutations/GeneratePermutations";

describe("GeneratePermutations", () => {
    test("array = [1, 2, 3], size = 2", () => {
        expect(GeneratePermutations([1, 2, 3], 2)).toEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 3],
                [2, 1],
                [2, 3],
                [3, 1],
                [3, 2],
            ]),
        );
    });

    test("array = [1, 2, 3], size = 3", () => {
        expect(GeneratePermutations([1, 2, 3], 3)).toEqual(
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

    test("array = [1], size = 1", () => {
        expect(GeneratePermutations([1], 1)).toEqual([[1]]);
    });

    test("array = [1, 2], size = 1", () => {
        expect(GeneratePermutations([1, 2], 1)).toEqual([[1], [2]]);
    });

    test("array = [1, 2, 3, 4], size = 3", () => {
        expect(GeneratePermutations([1, 2, 3, 4], 3).length).toBe(24);
    });
});
