// You are given a 0-indexed array of integers nums of length n.
// You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1].
// The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

// Hard: https://leetcode.com/problems/jump-game-ii/description/

// Dynamic programming solution O(n^2)
// export default function JumpGameII(nums: number[]): number {
//     let dp = new Array(nums.length).fill(Infinity);
//     dp[0] = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         let jump = nums[i];
//         while (jump > 0) {
//             if (i + jump < nums.length) {
//                 dp[i + jump] = Math.min(dp[i + jump], dp[i] + 1);
//             }
//             jump--;
//         }
//     }
//     return dp[dp.length - 1];
// }

// Greedy solution O(n)
export default function JumpGameII(nums: number[]): number {
    if (nums.length === 1) return 0;

    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }

    return jumps;
}