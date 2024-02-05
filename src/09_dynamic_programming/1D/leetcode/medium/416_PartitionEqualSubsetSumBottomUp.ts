// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

// Medium: https://leetcode.com/problems/partition-equal-subset-sum/description/

export default function PartitionEqualSubsetSumBottomUp(
    nums: number[],
): boolean {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) return false;

    let halfSum = sum / 2;

    let dp = new Array(halfSum + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = dp.length; j >= 0; j--) {
            if (dp[j]) dp[j + nums[i]] = true;
        }
        if (dp[halfSum]) return true;
    }

    return false;
}
