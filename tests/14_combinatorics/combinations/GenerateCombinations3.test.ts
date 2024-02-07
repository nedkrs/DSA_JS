import GenerateCombinations3 from "../../../src/14_combinatorics/combinations/GenerateCombinations3";

describe("GenerateCombinations3", () => {
    test("array = [1, 2, 3], size = 2", () => {
        expect(GenerateCombinations3([1, 2, 3], 2)).toEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 3],
                [2, 3],
            ]),
        );
    });

    test("empty array, any size", () => {
        expect(GenerateCombinations3([], 1)).toEqual([]);
    });

    test("array = [1], size = 1", () => {
        expect(GenerateCombinations3([1], 1)).toEqual([[1]]);
    });

    test("array = [1, 2, 3, 4], size = 3", () => {
        expect(GenerateCombinations3([1, 2, 3, 4], 3)).toEqual(
            expect.arrayContaining([
                [1, 2, 3],
                [1, 2, 4],
                [1, 3, 4],
                [2, 3, 4],
            ]),
        );
    });

    test("array with duplicate elements, size = 2", () => {
        expect(GenerateCombinations3([1, 2, 2], 2)).toEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 2],
                [2, 2],
            ]),
        );
    });

    test("array = [1, 2, 3, 4, 5], size = 4", () => {
        expect(GenerateCombinations3([1, 2, 3, 4, 5], 4)).toEqual(
            expect.arrayContaining([
                [1, 2, 3, 4],
                [1, 2, 3, 5],
                [1, 2, 4, 5],
                [1, 3, 4, 5],
                [2, 3, 4, 5],
            ]),
        );
    });
});
