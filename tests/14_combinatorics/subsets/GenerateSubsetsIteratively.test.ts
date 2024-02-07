import GenerateSubsetsIteratively from "../../../src/14_combinatorics/subsets/GenerateSubsetsIteratively";

describe("GenerateSubsetsIteratively", () => {
    test("arr = [1, 2, 3]", () => {
        expect(GenerateSubsetsIteratively([1, 2, 3])).toEqual(
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

    test("arr = [0]", () => {
        expect(GenerateSubsetsIteratively([0])).toEqual(
            expect.arrayContaining([[], [0]]),
        );
    });

    test("arr = [1, 2]", () => {
        expect(GenerateSubsetsIteratively([1, 2])).toEqual(
            expect.arrayContaining([[], [1], [2], [1, 2]]),
        );
    });

    test("arr = [1, 2, 3, 4]", () => {
        expect(GenerateSubsetsIteratively([1, 2, 3, 4]).length).toBe(16);
    });

    test("arr = [-1, 0, 1]", () => {
        expect(GenerateSubsetsIteratively([-1, 0, 1])).toEqual(
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
