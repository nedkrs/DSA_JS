import RotateImage from "../../../../src/13_maths/leetcode/medium/48_RotateImage";

describe("RotateImage", () => {
    test("rotates a 3x3 matrix correctly", () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        RotateImage(matrix);
        expect(matrix).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ]);
    });

    test("rotates a 4x4 matrix correctly", () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16],
        ];
        RotateImage(matrix);
        expect(matrix).toEqual([
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
        ]);
    });

    test("rotates a 1x1 matrix (no change expected)", () => {
        const matrix = [[1]];
        RotateImage(matrix);
        expect(matrix).toEqual([[1]]);
    });

    test("rotates a 2x2 matrix correctly", () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        RotateImage(matrix);
        expect(matrix).toEqual([
            [3, 1],
            [4, 2],
        ]);
    });

    test("handles empty matrix", () => {
        const matrix: number[][] = [];
        RotateImage(matrix);
        expect(matrix).toEqual([]);
    });
});
