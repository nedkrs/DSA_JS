// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

// Hard: https://leetcode.com/problems/largest-rectangle-in-histogram/description/

export default function LargestRectangleInHistogram(heights: number[]) {
    let max = 0;
    let stack = [];
    let n = heights.length;

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
