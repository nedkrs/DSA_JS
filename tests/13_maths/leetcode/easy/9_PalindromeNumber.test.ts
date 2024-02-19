import PalindromeNumber from "../../../../src/13_maths/leetcode/easy/9_PalindromeNumber";

describe("PalindromeNumber", () => {
    test("should return true for a positive palindrome number", () => {
        expect(PalindromeNumber(121)).toBe(true);
    });

    test("should return false for a negative number", () => {
        expect(PalindromeNumber(-121)).toBe(false);
    });

    test("should return false for a non-palindrome number", () => {
        expect(PalindromeNumber(123)).toBe(false);
    });

    test("should return true for a single digit number", () => {
        expect(PalindromeNumber(7)).toBe(true);
    });

    test("should return true for a large palindrome number", () => {
        expect(PalindromeNumber(123454321)).toBe(true);
    });

    test("should return true for 0", () => {
        expect(PalindromeNumber(0)).toBe(true);
    });
});
