// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

// Medium: https://leetcode.com/problems/word-search/description/

let dists = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

export default function WordSearch(board: string[][], word: string) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== word[0]) continue;
            if (dfs(board, i, j, 0, word)) return true;
        }
    }
    return false;
}

function dfs(
    board: string[][],
    i: number,
    j: number,
    letterIdx: number,
    word: string,
) {
    if (letterIdx >= word.length) return true;
    if (
        i < 0 ||
        i >= board.length ||
        j < 0 ||
        j >= board[0].length ||
        board[i][j] !== word[letterIdx]
    )
        return false;

    let temp = board[i][j];
    board[i][j] = "#";

    for (let k = 0; k < dists.length; k++) {
        let newi = i + dists[k][0];
        let newj = j + dists[k][1];
        if (dfs(board, newi, newj, letterIdx + 1, word)) return true;
    }

    board[i][j] = temp;
    return false;
}
