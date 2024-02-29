import WordSearchII from "../../../../src/07_trees/leetcode/hard/212_WordSearchII";

describe("WordSearchII", () => {
    test("finds all words present in the board", () => {
        const board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"],
        ];
        const words = ["oath", "pea", "eat", "rain"];
        expect(WordSearchII(board, words).sort()).toEqual(
            ["eat", "oath"].sort(),
        );
    });

    test("handles empty board", () => {
        const board: string[][] = [];
        const words = ["oath", "pea", "eat", "rain"];
        expect(WordSearchII(board, words)).toEqual([]);
    });

    test("handles board with no matching words", () => {
        const board = [
            ["x", "x", "x", "x"],
            ["x", "x", "x", "x"],
            ["x", "x", "x", "x"],
            ["x", "x", "x", "x"],
        ];
        const words = ["oath", "pea", "eat", "rain"];
        expect(WordSearchII(board, words)).toEqual([]);
    });

    test("finds words when the board is a single letter matching a single word", () => {
        const board = [["a"]];
        const words = ["a"];
        expect(WordSearchII(board, words)).toEqual(["a"]);
    });

    test("does not find words that are not fully present in the board", () => {
        const board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"],
        ];
        const words = ["oathkeeper"]; // Not present
        expect(WordSearchII(board, words)).toEqual([]);
    });

    test("handles case with overlapping word paths", () => {
        const board = [
            ["a", "b"],
            ["c", "d"],
        ];
        const words = ["abdc", "abcd"];
        expect(WordSearchII(board, words).sort()).toEqual(["abdc"].sort());
    });
});
