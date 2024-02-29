import InterleavingStringsBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/97_InterleavingStringsBottomUp";

test("basic interleaving", () => {
    expect(InterleavingStringsBottomUp("abc", "def", "adbcef")).toBe(true);
});

test("non-interleaving", () => {
    expect(InterleavingStringsBottomUp("abc", "def", "abdecff")).toBe(false);
});

test("one string empty", () => {
    InterleavingStringsBottomUp;
    expect(InterleavingStringsBottomUp("", "abc", "abc")).toBe(true);
    expect(InterleavingStringsBottomUp("abc", "", "abc")).toBe(true);
});

test("both strings empty", () => {
    expect(InterleavingStringsBottomUp("", "", "")).toBe(true);
});

test("characters match but order does not allow interleaving", () => {
    expect(InterleavingStringsBottomUp("abc", "bca", "bbacac")).toBe(false);
});

test("long strings that interleave correctly", () => {
    expect(InterleavingStringsBottomUp("aabcc", "dbbca", "aadbbcbcac")).toBe(
        true,
    );
});

test("long strings that do not interleave", () => {
    expect(InterleavingStringsBottomUp("aabcc", "dbbca", "aadbbbaccc")).toBe(
        false,
    );
});
