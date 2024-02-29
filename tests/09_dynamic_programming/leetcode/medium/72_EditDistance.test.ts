import EditDistance from "../../../../src/09_dynamic_programming/leetcode/medium/72_EditDistance";

test("word1 or word2 is empty", () => {
    expect(EditDistance("", "abc")).toBe(3);
    expect(EditDistance("abc", "")).toBe(3);
});

test("word1 equals word2", () => {
    expect(EditDistance("abc", "abc")).toBe(0);
});

test("insertions needed", () => {
    expect(EditDistance("a", "ab")).toBe(1);
});

test("deletions needed", () => {
    expect(EditDistance("abc", "a")).toBe(2);
});

test("substitutions needed", () => {
    expect(EditDistance("abc", "adc")).toBe(1);
});

test("mix of operations", () => {
    expect(EditDistance("horse", "ros")).toBe(3);
    expect(EditDistance("intention", "execution")).toBe(5);
});

test("long strings", () => {
    expect(EditDistance("dinosaur", "dinosaur")).toBe(0);
    expect(
        EditDistance(
            "abcdefghijklmnopqrstuvwxyz",
            "bcdefghijklmnopqrstuvwxyza",
        ),
    ).toBe(2);
});
