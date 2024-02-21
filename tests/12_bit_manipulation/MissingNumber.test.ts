import MissingNumber from "../../src/12_bit_manipulation/MissingNumber";

describe("MissingNumber function", () => {
    test("finds the missing number in a small array", () => {
        expect(MissingNumber([3, 0, 1])).toBe(2);
    });

    test("finds the missing number in a larger array", () => {
        expect(MissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    test("handles the missing number at the beginning", () => {
        expect(MissingNumber([1, 2])).toBe(0);
    });

    test("handles the missing number at the end", () => {
        expect(MissingNumber([0, 1, 2, 3])).toBe(4);
    });

    test("works with an array of size 1 (missing number is 0)", () => {
        expect(MissingNumber([1])).toBe(0);
    });

    test("works with an array of size 1 (missing number is 1)", () => {
        expect(MissingNumber([0])).toBe(1);
    });

    test("works with an array of size 2", () => {
        expect(MissingNumber([1, 0])).toBe(2);
    });
});
