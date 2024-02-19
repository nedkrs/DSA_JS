// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+'
// and '-' before each integer in nums and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-'
// before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Example 2:
// Input: nums = [1], target = 1
// Output: 1

// Constraints:

// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// -1000 <= target <= 1000

// Medium: https://leetcode.com/problems/target-sum/description/

export default function TargetSumTopDown(nums: number[], target: number) {
    let dp: { [key: string]: number } = {};
    find(0, 0, target, dp, nums);
    return dp["0:0"];
}

function find(
    i: number,
    total: number,
    target: number,
    dp: { [key: string]: number },
    nums: number[],
) {
    if (i === nums.length) dp[`${i}:${total}`] = total === target ? 1 : 0;
    if (dp[`${i}:${total}`] !== undefined) return dp[`${i}:${total}`];
    dp[`${i}:${total}`] =
        find(i + 1, total - nums[i], target, dp, nums) +
        find(i + 1, total + nums[i], target, dp, nums);
    return dp[`${i}:${total}`];
}
