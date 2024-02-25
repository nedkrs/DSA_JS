import ThreeSum from "../../../../src/01_arrays/leetcode/medium/15_3Sum";

describe("ThreeSum", () => {
    test("finds triplets that sum to 0", () => {
        expect(ThreeSum([-1, 0, 1, 2, -1, -4])).toEqual(
            expect.arrayContaining([
                [-1, -1, 2],
                [-1, 0, 1],
            ]),
        );
    });

    test("returns an empty array when no triplets sum to 0", () => {
        expect(ThreeSum([1, 2, -2, -1])).toEqual([]);
    });

    test("handles array with all zeroes", () => {
        expect(ThreeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
    });

    test("handles array with no elements", () => {
        expect(ThreeSum([])).toEqual([]);
    });

    test("handles array with fewer than 3 elements", () => {
        expect(ThreeSum([1, 2])).toEqual([]);
    });

    test("correctly identifies multiple distinct triplets", () => {
        expect(ThreeSum([-1, 0, 1, 2, -1, -4, -2, 1, -5, 4])).toEqual(
            expect.arrayContaining([
                [-5, 1, 4],
                [-4, 0, 4],
                [-2, 0, 2],
                [-2, 1, 1],
                [-1, -1, 2],
                [-1, 0, 1],
            ]),
        );
    });

    test("skips duplicate triplets", () => {
        expect(ThreeSum([-1, 0, 1, 0])).toEqual(
            expect.arrayContaining([[-1, 0, 1]]),
        );
    });
});
