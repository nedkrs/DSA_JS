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
    let nse = new Array(heights.length).fill(-1);
    let pse = new Array(heights.length).fill(-1);
    let stack = [];

    for (let i = 0; i < heights.length; i++) {
        while (
            stack.length > 0 &&
            heights[i] < heights[stack[stack.length - 1]]
        ) {
            let curr = stack.pop() as number;
            nse[curr] = i;
        }
        stack.push(i);
    }

    stack = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        while (
            stack.length > 0 &&
            heights[i] < heights[stack[stack.length - 1]]
        ) {
            let curr = stack.pop() as number;
            pse[curr] = i;
        }
        stack.push(i);
    }

    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        let height = heights[i];
        let left = pse[i] >= 0 ? pse[i] : -1;
        let right = nse[i] >= 0 ? nse[i] : heights.length;
        let width = right - left - 1;
        let area = width * height;
        max = Math.max(max, area);
    }

    return max;
}
