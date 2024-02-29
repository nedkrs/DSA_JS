import RegularExpressionMatching from "../../../../src/09_dynamic_programming/leetcode/hard/10_RegularExpressionMatching";

describe("RegularExpressionMatching", () => {
    test("matches exact string without special characters", () => {
        expect(RegularExpressionMatching("abc", "abc")).toBe(true);
    });

    test("does not match different strings without special characters", () => {
        expect(RegularExpressionMatching("abc", "abd")).toBe(false);
    });

    test("matches with single character wildcard", () => {
        expect(RegularExpressionMatching("abc", "a.c")).toBe(true);
    });

    test("does not match with single character wildcard leading to mismatch", () => {
        expect(RegularExpressionMatching("abc", "a.d")).toBe(false);
    });

    test("matches with asterisk representing zero characters", () => {
        expect(RegularExpressionMatching("abc", "ab*c")).toBe(true);
    });

    test("matches with asterisk representing multiple characters", () => {
        expect(RegularExpressionMatching("abbbbc", "ab*c")).toBe(true);
    });

    test("matches with asterisk representing one character", () => {
        expect(RegularExpressionMatching("abc", "a.*c")).toBe(true);
    });

    test("empty string and empty pattern", () => {
        expect(RegularExpressionMatching("", "")).toBe(true);
    });

    test("empty string with pattern that can match empty", () => {
        expect(RegularExpressionMatching("", "a*")).toBe(true);
    });

    test("non-empty string with pattern that only matches empty", () => {
        expect(RegularExpressionMatching("a", "b*")).toBe(false);
    });

    test("string matches complex pattern", () => {
        expect(RegularExpressionMatching("abbbbc", "a.*b*c")).toBe(true);
    });

    test("string does not match complex pattern", () => {
        expect(RegularExpressionMatching("abbbbc", "a.*d")).toBe(false);
    });
});
