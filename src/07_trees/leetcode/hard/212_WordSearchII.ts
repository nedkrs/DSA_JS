// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once in a word.

// Example 1:
// Input:
// board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
// words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:
// Input: board = [["a","b"],["c","d"]],
// words = ["abcb"]
// Output: []

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

// Hard: https://leetcode.com/problems/word-search-ii/description/

export default function findWords(
    board: string[][],
    words: string[],
): string[] {
    let res = new Set<string>();
    let node = new Trie(words).node();
    let wordsSet = new Set(words);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, "", node);
        }
    }

    function dfs(
        b: string[][],
        i: number,
        j: number,
        word: string,
        node: NodeTrie,
    ) {
        let char = board[i][j];
        word += char;
        let idx = word[word.length - 1].charCodeAt(0) - 97;

        if (!node.children[idx]) return;
        if (wordsSet.has(word)) res.add(word);

        b[i][j] = "#";

        for (let k = 0; k < dists.length; k++) {
            let newi = i + dists[k][0];
            let newj = j + dists[k][1];
            if (
                newi >= 0 &&
                newi < b.length &&
                newj >= 0 &&
                newj < b[0].length &&
                b[newi][newj] !== "#"
            ) {
                dfs(b, newi, newj, word, node.children[idx]);
            }
        }

        b[i][j] = char;
    }

    return Array.from(res);
}

let dists = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

export type NodeTrie = {
    children: NodeTrie[];
};

class Trie {
    root: NodeTrie;

    constructor(words: string[]) {
        this.root = { children: [] };
        words.forEach((word) => this.insertWord(word));
    }

    node() {
        return this.root;
    }

    insertWord(word: string): void {
        let node = this.root;

        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            let num = this.letterToNumber(letter);
            if (!node.children[num]) {
                node.children[num] = {
                    children: [],
                };
            }
            node = node.children[num];
        }
    }

    letterToNumber(letter: string) {
        return letter.charCodeAt(0) - "a".charCodeAt(0);
    }
}
