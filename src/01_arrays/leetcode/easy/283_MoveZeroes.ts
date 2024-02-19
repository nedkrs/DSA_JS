// Given an integer array nums,move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// Easy: https://leetcode.com/problems/move-zeroes/description/

export default function MoveZeroes(nums: number[]) {
    let idx = 0;

    if (nums.length <= 1) return nums;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let tmp = nums[i];
            nums[i] = nums[idx];
            nums[idx] = tmp;
            idx++;
        }
    }

    return nums;
}
