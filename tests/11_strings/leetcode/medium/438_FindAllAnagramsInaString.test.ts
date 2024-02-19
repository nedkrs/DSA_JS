import FindAllAnagramsInaString from "../../../../src/11_strings/leetcode/medium/438_FindAllAnagramsInaString";

test('finds anagrams of "ab" in "cbaebabacd"', () => {
    expect(FindAllAnagramsInaString("cbaebabacd", "ab")).toEqual([1, 4, 5, 6]);
});

test('finds anagrams of "abc" in "abacbabc"', () => {
    expect(FindAllAnagramsInaString("abacbabc", "abc")).toEqual([1, 2, 3, 5]);
});

test("returns empty array when no anagrams found", () => {
    expect(FindAllAnagramsInaString("teststring", "xyz")).toEqual([]);
});

test("works with single character strings", () => {
    expect(FindAllAnagramsInaString("aa", "a")).toEqual([0, 1]);
});

test('correctly handles characters not in "p"', () => {
    expect(FindAllAnagramsInaString("afg", "f")).toEqual([1]);
});
