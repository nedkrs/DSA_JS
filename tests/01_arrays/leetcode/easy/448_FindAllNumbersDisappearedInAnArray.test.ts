import FindAllNumbersDisappearedInAnArray from "../../../../src/01_arrays/leetcode/easy/448_FindAllNumbersDisappearedInAnArray";

describe("FindAllNumbersDisappearedInAnArray", () => {
    it("should find all disappeared numbers in the array", () => {
        expect(
            FindAllNumbersDisappearedInAnArray([4, 3, 2, 7, 8, 2, 3, 1]),
        ).toEqual([5, 6]);
    });

    it("should return an empty array if no numbers are missing", () => {
        expect(FindAllNumbersDisappearedInAnArray([1, 2, 3, 4])).toEqual([]);
    });

    it("should handle an empty input array", () => {
        expect(FindAllNumbersDisappearedInAnArray([])).toEqual([]);
    });

    it("should handle array with all elements missing", () => {
        expect(FindAllNumbersDisappearedInAnArray([2, 2])).toEqual([1]);
    });

    it("should handle large array", () => {
        const array = Array.from({ length: 100 }, (_, index) => index + 1);
        const missing = [50, 75];
        // Remove 'missing' numbers
        const inputArray = array.filter((num) => !missing.includes(num));
        expect(FindAllNumbersDisappearedInAnArray(inputArray)).toEqual(missing);
    });
});
