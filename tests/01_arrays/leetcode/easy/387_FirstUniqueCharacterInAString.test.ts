import FirstUniqueCharacterInAString from "../../../../src/01_arrays/leetcode/easy/387_FirstUniqueCharacterInAString";

describe("FirstUniqueCharacterInAString", () => {
    test("returns the index of the first unique character", () => {
        expect(FirstUniqueCharacterInAString("leetcode")).toBe(0);
        expect(FirstUniqueCharacterInAString("loveleetcode")).toBe(2);
    });

    test("returns -1 when there are no unique characters", () => {
        expect(FirstUniqueCharacterInAString("aabb")).toBe(-1);
        expect(FirstUniqueCharacterInAString("")).toBe(-1);
    });

    test("handles string with all unique characters", () => {
        expect(FirstUniqueCharacterInAString("abc")).toBe(0);
    });

    test("handles strings with repeating unique characters", () => {
        expect(FirstUniqueCharacterInAString("abca")).toBe(1);
        expect(FirstUniqueCharacterInAString("aabccbd")).toBe(6);
    });

    test("handles single character strings", () => {
        expect(FirstUniqueCharacterInAString("a")).toBe(0);
    });

    test("handles strings with non-alphabetic characters", () => {
        expect(FirstUniqueCharacterInAString("!@#$%^&*()")).toBe(0);
        expect(FirstUniqueCharacterInAString("a1b1c1")).toBe(0);
    });
});
