// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Medium: https://leetcode.com/problems/rotate-array/description/

export default function RotateArray(nums: number[], k: number) {
    let n = nums.length;
    k = k % n;
    if (k === 0 || n <= 1) return;

    let count = 0;

    for (let start = 0; count < n; start++) {
        let currentIdx = start;
        let prevElement = nums[start];
        do {
            const nextIdx = (currentIdx + k) % n;
            [nums[nextIdx], prevElement] = [prevElement, nums[nextIdx]];
            currentIdx = nextIdx;
            count++;
        } while (start !== currentIdx);
    }
}
