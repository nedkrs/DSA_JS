import WordSearch from "../../../../src/10_graphs/leetcode/medium/79_WordSearch";

describe("WordSearch", () => {
    it("should find word horizontally in the board", () => {
        const board: string[][] = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word: string = "ABCCED";
        expect(WordSearch(board, word)).toBe(true);
    });

    it("should find word vertically in the board", () => {
        const board: string[][] = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word: string = "SEE";
        expect(WordSearch(board, word)).toBe(true);
    });

    it("should not find word that is not present", () => {
        const board: string[][] = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word: string = "ABCB";
        expect(WordSearch(board, word)).toBe(false);
    });

    it("should handle empty board", () => {
        const board: string[][] = [];
        const word: string = "A";
        expect(WordSearch(board, word)).toBe(false);
    });

    it("should handle single letter board matching word", () => {
        const board: string[][] = [["A"]];
        const word: string = "A";
        expect(WordSearch(board, word)).toBe(true);
    });

    it("should handle case where word is longer than any path in the board", () => {
        const board: string[][] = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word: string = "ABCFESEEDASFB";
        expect(WordSearch(board, word)).toBe(false);
    });
});
