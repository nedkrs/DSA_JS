// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// Hard: https://leetcode.com/problems/trapping-rain-water/description/

export default function TrapRainWater(height: number[]) {
    let maxR = new Array(height.length).fill(-1);
    let maxL = new Array(height.length).fill(-1);

    for (let i = 0; i < height.length; i++) {
        maxL[i] = Math.max(height[i - 1] || 0, maxL[i - 1] || 0);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        maxR[i] = Math.max(height[i + 1] || 0, maxR[i + 1] || 0);
    }

    let trappedWater = 0;

    for (let i = 1; i < height.length - 1; i++) {
        if (height[i] >= Math.min(maxL[i], maxR[i])) continue;
        let aboveIdx = Math.min(maxL[i], maxR[i]) - height[i];
        trappedWater += aboveIdx;
    }

    return trappedWater;
}
