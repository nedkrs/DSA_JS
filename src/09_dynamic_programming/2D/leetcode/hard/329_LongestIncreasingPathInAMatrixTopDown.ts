// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions:
// left, right, up, or down.
// You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

// Example 1:
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:
// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// Example 3:
// Input: matrix = [[1]]
// Output: 1

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 231 - 1

// Hard: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/

let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

export default function LongestIncreasingPathTopDown(matrix: number[][]) {
    let dp = new Array(matrix.length)
        .fill(0)
        .map((_) => new Array(matrix[0].length).fill(1));
    let max = 0;

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            dfs(i, j, -1, -1, matrix, dp);
        }
    }

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            max = Math.max(max, dp[i][j]);
        }
    }

    return max;
}

function dfs(
    i: number,
    j: number,
    pi: number,
    pj: number,
    matrix: number[][],
    dp: number[][],
) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
        return 0;
    }

    if (pi >= 0 && pj >= 0 && matrix[pi][pj] >= matrix[i][j]) {
        return 0;
    }

    if (dp[i][j] > 1) {
        return dp[i][j];
    }

    let maxHere = [];

    for (let k = 0; k < dirs.length; k++) {
        let newi = i + dirs[k][0];
        let newj = j + dirs[k][1];
        if (newi === pi && newj === pj) continue;

        maxHere.push(
            Math.max(dp[i][j], dfs(newi, newj, i, j, matrix, dp) + dp[i][j]),
        );
    }

    dp[i][j] = Math.max(...maxHere);

    return dp[i][j];
}
