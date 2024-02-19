import MoveZeroes from "../../../../src/01_arrays/leetcode/easy/283_MoveZeroes";

describe("MoveZeroes", () => {
    test("moves all zeroes to the end of the array", () => {
        const input = [0, 1, 0, 3, 12];
        const expected = [1, 3, 12, 0, 0];
        expect(MoveZeroes(input)).toEqual(expected);
    });

    test("handles array with no zeroes", () => {
        const input = [1, 2, 3, 4];
        const expected = [1, 2, 3, 4];
        expect(MoveZeroes(input)).toEqual(expected);
    });

    test("handles array with all zeroes", () => {
        const input = [0, 0, 0, 0];
        const expected = [0, 0, 0, 0];
        expect(MoveZeroes(input)).toEqual(expected);
    });

    test("handles array with one element", () => {
        const input = [0];
        const expected = [0];
        expect(MoveZeroes(input)).toEqual(expected);
    });

    test("handles empty array", () => {
        const input: number[] = [];
        const expected: number[] = [];
        expect(MoveZeroes(input)).toEqual(expected);
    });

    test("maintains order of non-zero elements", () => {
        const input = [4, 2, 0, 1, 0, 3, 0];
        const expected = [4, 2, 1, 3, 0, 0, 0];
        expect(MoveZeroes(input)).toEqual(expected);
    });
});
