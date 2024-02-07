// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

//  Medium: https://leetcode.com/problems/number-of-islands/description/

export default function NumberOfIslands(grid: string[][]) {
    let dp = new Array(grid.length)
        .fill(false)
        .map((_) => new Array(grid[0].length).fill(false));
    let numOfIslands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1" && dp[i][j] !== true) {
                dfs(i, j, grid, dp);
                numOfIslands++;
            }
        }
    }
    return numOfIslands;
}

let dists = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

function dfs(i: number, j: number, grid: string[][], dp: boolean[][]) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return;
    }

    if (grid[i][j] === "0") {
        return;
    }

    if (dp[i][j] === true) {
        return;
    }

    dp[i][j] = true;

    for (let k = 0; k < dists.length; k++) {
        let newi = i + dists[k][0];
        let newj = j + dists[k][1];
        dfs(newi, newj, grid, dp);
    }
}
