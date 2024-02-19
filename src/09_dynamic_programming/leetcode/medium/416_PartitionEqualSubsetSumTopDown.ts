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

export default function PartitionEqualSubsetSumTopDown(
    nums: number[],
): boolean {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) return false;

    let halfSum = sum / 2;
    let dp = {};

    return partition(nums, halfSum, nums.length - 1, dp);
}

function partition(
    nums: number[],
    sum: number,
    i: number,
    dp: { [key: string]: boolean },
) {
    if (sum === 0) return true;
    if (i < 0 || sum < 0) return false;

    if (dp[`${i} ${sum}`]) return dp[`${i} ${sum}`];

    dp[`${i} ${sum}`] =
        partition(nums, sum - nums[i], i - 1, dp) ||
        partition(nums, sum, i - 1, dp);

    return dp[`${i} ${sum}`];
}
