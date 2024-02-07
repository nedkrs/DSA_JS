import LongestPalindromicSubstringBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/5_LongestPalindromicSubstringBottomUp";

describe("LongestPalindromicSubstring", () => {
    test("single character string", () => {
        expect(LongestPalindromicSubstringBottomUp("a")).toEqual("a");
    });

    test("string with no palindromes", () => {
        expect(LongestPalindromicSubstringBottomUp("abc")).toEqual("a");
    });

    test("string with a simple palindrome", () => {
        expect(LongestPalindromicSubstringBottomUp("babad")).toEqual("bab");
    });

    test("string where entire string is a palindrome", () => {
        expect(LongestPalindromicSubstringBottomUp("racecar")).toEqual(
            "racecar",
        );
    });

    test("string with multiple palindromes", () => {
        expect(LongestPalindromicSubstringBottomUp("forgeeksskeegfor")).toEqual(
            "geeksskeeg",
        );
    });

    test("empty string", () => {
        expect(LongestPalindromicSubstringBottomUp("")).toEqual("");
    });
});
