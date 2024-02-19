import LongestCommonSubsequenceTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/1143_LongestCommonSubsequenceTopDown";

test("basic functionality with known LCS", () => {
    expect(LongestCommonSubsequenceTopDown("abcde", "ace")).toBe(3);
});

test("no common subsequence", () => {
    expect(LongestCommonSubsequenceTopDown("abc", "def")).toBe(0);
});

test("one string is empty", () => {
    expect(LongestCommonSubsequenceTopDown("", "abc")).toBe(0);
    expect(LongestCommonSubsequenceTopDown("abc", "")).toBe(0);
});

test("identical strings", () => {
    expect(LongestCommonSubsequenceTopDown("abc", "abc")).toBe(3);
});

test("subsequence vs. substring", () => {
    expect(LongestCommonSubsequenceTopDown("abc", "acb")).toBe(2);
});

test("all characters in common but in different orders", () => {
    expect(LongestCommonSubsequenceTopDown("abc", "cba")).toBe(1);
});
