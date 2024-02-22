import FindTheDuplicateNumber from "../../../../src/01_arrays/leetcode/medium/287_FindTheDuplicateNumber";

describe("FindTheDuplicateNumber", () => {
    test("finds duplicate in a short array", () => {
        expect(FindTheDuplicateNumber([1, 3, 4, 2, 2])).toBe(2);
    });

    test("finds duplicate when it appears at the beginning", () => {
        expect(FindTheDuplicateNumber([3, 1, 3, 4, 2])).toBe(3);
    });

    test("finds duplicate in a longer array", () => {
        expect(FindTheDuplicateNumber([5, 9, 6, 1, 3, 4, 8, 9, 2, 7])).toBe(9);
    });

    test("finds duplicate when it appears at the end", () => {
        expect(FindTheDuplicateNumber([1, 5, 3, 4, 2, 6, 7, 8, 9, 5])).toBe(5);
    });

    test("finds duplicate when array has multiple duplicates (still returns the one duplicate)", () => {
        expect(
            FindTheDuplicateNumber([10, 2, 5, 2, 9, 1, 8, 3, 7, 4, 6, 2]),
        ).toBe(2);
    });
});
