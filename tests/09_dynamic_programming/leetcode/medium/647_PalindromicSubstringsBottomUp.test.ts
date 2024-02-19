import PalindromicSubstringsBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/647_PalindromicSubstringsBottomUp";

describe("PalindromicSubstringsBottomUp", () => {
    test("empty string", () => {
        expect(PalindromicSubstringsBottomUp("")).toEqual(0);
    });

    test("single character", () => {
        expect(PalindromicSubstringsBottomUp("a")).toEqual(1);
    });

    test("two different characters", () => {
        expect(PalindromicSubstringsBottomUp("ab")).toEqual(2);
    });

    test("two same characters", () => {
        expect(PalindromicSubstringsBottomUp("aa")).toEqual(3);
    });

    test("typical case", () => {
        expect(PalindromicSubstringsBottomUp("abcba")).toEqual(7);
    });

    test("case with no palindromes longer than one character", () => {
        expect(PalindromicSubstringsBottomUp("abcd")).toEqual(4);
    });

    test("string with repeated characters", () => {
        expect(PalindromicSubstringsBottomUp("aaaa")).toEqual(10);
    });

    test("complex case", () => {
        expect(PalindromicSubstringsBottomUp("abbaeae")).toEqual(11);
    });
});
