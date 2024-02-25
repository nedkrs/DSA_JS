import WordLadder from "../../../../src/11_strings/leetcode/hard/127_WordLadder";

describe("WordLadder", () => {
    test("finds the shortest transformation sequence length", () => {
        expect(
            WordLadder("hit", "cog", [
                "hot",
                "dot",
                "dog",
                "lot",
                "log",
                "cog",
            ]),
        ).toBe(5);
        expect(
            WordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
        ).toBe(0);
    });

    test("returns 0 if endWord is not in the wordList", () => {
        expect(
            WordLadder("hit", "cog", ["hot", "dot", "tog", "lot", "log"]),
        ).toBe(0);
    });

    test("handles cases where beginWord is directly connected to endWord", () => {
        expect(
            WordLadder("hit", "hot", [
                "hot",
                "dot",
                "dog",
                "lot",
                "log",
                "cog",
            ]),
        ).toBe(2);
    });

    test("returns 0 when there is no possible transformation", () => {
        expect(WordLadder("abc", "def", ["ghi", "jkl", "mno"])).toBe(0);
    });
});
