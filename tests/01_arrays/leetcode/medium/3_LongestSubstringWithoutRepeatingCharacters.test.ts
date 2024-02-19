import LongestSubstringWithoutRepeatingCharacters from "../../../../src/01_arrays/leetcode/medium/3_LongestSubstringWithoutRepeatingCharacters";

describe("LongestSubstringWithoutRepeatingCharacters", () => {
    test("Example 1: s = 'abcabcbb'", () => {
        const s = "abcabcbb";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(3);
    });

    test("Example 2: s = 'bbbbb'", () => {
        const s = "bbbbb";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(1);
    });

    test("Example 3: s = 'pwwkew'", () => {
        const s = "pwwkew";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(3);
    });

    test("Empty string: s = ''", () => {
        const s = "";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(0);
    });

    test("Unique characters: s = 'abcdefghijklmnopqrstuvwxyz'", () => {
        const s = "abcdefghijklmnopqrstuvwxyz";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(26);
    });

    test("Repeating characters at different intervals: s = 'abcadeafgh'", () => {
        const s = "abcadeafgh";
        const result = LongestSubstringWithoutRepeatingCharacters(s);
        expect(result).toEqual(6);
    });
});
