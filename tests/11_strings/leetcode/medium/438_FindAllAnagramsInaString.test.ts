import FindAllAnagramsInAString from "../../../../src/11_strings/leetcode/medium/438_FindAllAnagramsInAString";

test('finds anagrams of "ab" in "cbaebabacd"', () => {
    expect(FindAllAnagramsInAString("cbaebabacd", "ab")).toEqual([1, 4, 5, 6]);
});

test('finds anagrams of "abc" in "abacbabc"', () => {
    expect(FindAllAnagramsInAString("abacbabc", "abc")).toEqual([1, 2, 3, 5]);
});

test("returns empty array when no anagrams found", () => {
    expect(FindAllAnagramsInAString("teststring", "xyz")).toEqual([]);
});

test("works with single character strings", () => {
    expect(FindAllAnagramsInAString("aa", "a")).toEqual([0, 1]);
});

test('correctly handles characters not in "p"', () => {
    expect(FindAllAnagramsInAString("afg", "f")).toEqual([1]);
});
