import Searcha2DMatrixII from "../../../../src/05_search/leetcode/medium/240_Searcha2DMatrixII";

describe("Searcha2DMatrixII", () => {
    test("finds target in matrix", () => {
        const matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ];
        const target = 5;
        expect(Searcha2DMatrixII(matrix, target)).toBe(true);
    });

    test("does not find target not in matrix", () => {
        const matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ];
        const target = 20;
        expect(Searcha2DMatrixII(matrix, target)).toBe(false);
    });

    test("works with one element matrix", () => {
        const matrix = [[5]];
        const target = 5;
        expect(Searcha2DMatrixII(matrix, target)).toBe(true);
    });

    test("returns false for one element matrix when element is not target", () => {
        const matrix = [[4]];
        const target = 5;
        expect(Searcha2DMatrixII(matrix, target)).toBe(false);
    });
});
