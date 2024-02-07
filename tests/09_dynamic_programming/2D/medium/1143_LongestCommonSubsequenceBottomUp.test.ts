import LongestCommonSubsequenceBottomUp from "../../../../src/09_dynamic_programming/2D/leetcode/medium/1143_LongestCommonSubsequenceBottomUp";

test("basic functionality with known LCS", () => {
    expect(LongestCommonSubsequenceBottomUp("abcde", "ace")).toBe(3);
});

test("no common subsequence", () => {
    expect(LongestCommonSubsequenceBottomUp("abc", "def")).toBe(0);
});

test("one string is empty", () => {
    expect(LongestCommonSubsequenceBottomUp("", "abc")).toBe(0);
    expect(LongestCommonSubsequenceBottomUp("abc", "")).toBe(0);
});

test("identical strings", () => {
    expect(LongestCommonSubsequenceBottomUp("abc", "abc")).toBe(3);
});

test("subsequence vs. substring", () => {
    expect(LongestCommonSubsequenceBottomUp("abc", "acb")).toBe(2);
});

test("all characters in common but in different orders", () => {
    expect(LongestCommonSubsequenceBottomUp("abc", "cba")).toBe(1);
});
