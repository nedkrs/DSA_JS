import InterleavingStringsTopDown from "../../../../src/09_dynamic_programming/2D/leetcode/medium/97_InterleavingStringsTopDown"; // Adjust the import path as necessary

test("basic interleaving", () => {
    expect(InterleavingStringsTopDown("abc", "def", "adbcef")).toBe(true);
});

test("non-interleaving", () => {
    expect(InterleavingStringsTopDown("abc", "def", "abdecff")).toBe(false);
});

test("one string empty", () => {
    InterleavingStringsTopDown;
    expect(InterleavingStringsTopDown("", "abc", "abc")).toBe(true);
    expect(InterleavingStringsTopDown("abc", "", "abc")).toBe(true);
});

test("both strings empty", () => {
    expect(InterleavingStringsTopDown("", "", "")).toBe(true);
});

test("characters match but order does not allow interleaving", () => {
    expect(InterleavingStringsTopDown("abc", "bca", "bbacac")).toBe(false);
});

test("long strings that interleave correctly", () => {
    expect(InterleavingStringsTopDown("aabcc", "dbbca", "aadbbcbcac")).toBe(
        true,
    );
});

test("long strings that do not interleave", () => {
    expect(InterleavingStringsTopDown("aabcc", "dbbca", "aadbbbaccc")).toBe(
        false,
    );
});
