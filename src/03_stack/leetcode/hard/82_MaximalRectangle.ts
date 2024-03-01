// Given a rows x cols binary matrix filled with 0's and 1's,
// find the largest rectangle containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:
// Input: matrix = [["0"]]
// Output: 0

// Example 3:
// Input: matrix = [["1"]]
// Output: 1

// Constraints:

// rows == matrix.length
// cols == matrix[i].length
// 1 <= row, cols <= 200
// matrix[i][j] is '0' or '1'.

// Hard: https://leetcode.com/problems/maximal-rectangle/description/

export default function MaximalRectangle(
    matrix: (string | number)[][],
): number {
    let max = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;

    let heights = new Array(cols).fill(0);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let cell = matrix[row][col];

            if (row === 0) {
                heights[col] = cell === "0" ? 0 : 1;
            } else {
                heights[col] = cell === "0" ? 0 : heights[col] + 1;
            }
        }

        max = Math.max(max, maxRectanglePerRow(heights));
    }

    return max;
}

function maxRectanglePerRow(heights: number[]) {
    let stack = [];
    let n = heights.length;
    let max = 0;

    for (let i = 0; i <= n; i++) {
        while (
            stack.length > 0 &&
            (i === n || heights[i] < heights[stack[stack.length - 1]])
        ) {
            let curr = stack.pop();
            let right = i;
            let left = stack.length > 0 ? stack[stack.length - 1] : -1;
            let width = right - left - 1;
            let area = heights[curr!] * width;
            max = Math.max(max, area);
        }
        stack.push(i);
    }

    return max;
}
