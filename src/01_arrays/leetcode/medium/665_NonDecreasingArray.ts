// Given an array nums with n integers, your task is to check if
// it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds
// for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:
// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

// Example 2:
// Input: nums = [4,2,1]
// Output: false
// Explanation: You cannot get a non-decreasing array by modifying at most one element.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -105 <= nums[i] <= 105

// Medium: https://leetcode.com/problems/non-decreasing-array/description/

export default function NonDecreasingArray(nums: number[]) {
    let modifications = 0;

    for (let i = 1; i < nums.length && modifications <= 1; i++) {
        if (nums[i - 1] > nums[i]) {
            modifications++;
            if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }

    return modifications <= 1;
}
