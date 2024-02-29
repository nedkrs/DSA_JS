// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with
// a number on it represented by an array nums. You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.
// If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
// Return the maximum coins you can collect by bursting the balloons wisely.

// Example 1:
// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

// Example 2:
// Input: nums = [1,5]
// Output: 10

// Constraints:

// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100

// Hard: https://leetcode.com/problems/burst-balloons/description/

export default function BurstBallons(nums: number[]) {
    if (nums.length === 1) return nums[0];

    let balloons = [1, ...nums, 1];
    let dp = new Array(balloons.length)
        .fill(0)
        .map((_) => new Array(balloons.length).fill(0));

    function burst(l: number, r: number) {
        if (l + 1 === r) return 0;
        if (dp[l][r] > 0) return dp[l][r];

        for (let i = l + 1; i < r; i++) {
            let currMax =
                balloons[l] * balloons[i] * balloons[r] +
                burst(l, i) +
                burst(i, r);
            dp[l][r] = Math.max(dp[l][r], currMax);
        }

        return dp[l][r];
    }

    burst(0, balloons.length - 1);

    return dp[0][balloons.length - 1];
}
