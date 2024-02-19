// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

// Medium: https://leetcode.com/problems/subarray-sum-equals-k/

export default function SubarraySumEqualsK(nums: number[], k: number) {
    let count = 0;
    let prefixSum = 0;
    let prefixSumCounts = new Map();
    prefixSumCounts.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSumCounts.has(prefixSum - k)) {
            count += prefixSumCounts.get(prefixSum - k);
        }
        prefixSumCounts.set(
            prefixSum,
            (prefixSumCounts.get(prefixSum) || 0) + 1,
        );
    }

    return count;
}
