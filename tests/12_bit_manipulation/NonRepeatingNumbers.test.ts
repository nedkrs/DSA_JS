import NonRepeatingNumbers from "../../src/12_bit_manipulation/NonRepeatingNumbers";

describe("NonRepeatingNumbers function", () => {
    test("finds two non-repeating numbers in an array with two unique numbers", () => {
        const result = NonRepeatingNumbers([2, 4, 7, 9, 2, 4]).sort(
            (a, b) => a - b,
        );
        expect(result).toEqual([7, 9]);
    });

    test("works when one of the non-repeating numbers is 0", () => {
        const result = NonRepeatingNumbers([0, 1, 2, 1, 2, 3]).sort(
            (a, b) => a - b,
        );
        expect(result).toEqual([0, 3]);
    });

    test("works with negative numbers", () => {
        const result = NonRepeatingNumbers([-1, -2, -1, 3, 4, -2]).sort(
            (a, b) => a - b,
        );
        expect(result).toEqual([3, 4]);
    });

    test("handles large arrays correctly", () => {
        const largeArray = [1, 1, 2, 2, 3, 4];
        const result = NonRepeatingNumbers(largeArray).sort((a, b) => a - b);
        expect(result).toEqual([3, 4]);
    });

    test("works with all numbers repeating except two", () => {
        const result = NonRepeatingNumbers([5, 5, 6, 6, 7, 8]).sort(
            (a, b) => a - b,
        );
        expect(result).toEqual([7, 8]);
    });

    test("correctly identifies numbers when array contains multiple repeating numbers and two non-repeating numbers", () => {
        const result = NonRepeatingNumbers([1, 2, 2, 3, 3, 4]).sort(
            (a, b) => a - b,
        );
        expect(result).toEqual([1, 4]);
    });
});
