// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Medium: https://leetcode.com/problems/top-k-frequent-elements/description/

export default function TopKFrequentElements(nums: number[], k: number) {
    let hash: { [key: string]: { v: number; f: number } } = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) hash[nums[i]].f++;
        else hash[nums[i]] = { f: 1, v: nums[i] };
    }

    let distinct = Object.values(hash);

    return qs(distinct, 0, distinct.length - 1, k - 1).map((it) => it.v);
}

function qs(
    arr: { v: number; f: number }[],
    lo: number,
    hi: number,
    k: number,
) {
    if (lo > hi) return [];

    let pivotIdx = partition(arr, lo, hi);

    if (pivotIdx === k) {
        return arr.slice(0, k + 1);
    } else if (pivotIdx > k) {
        return qs(arr, lo, pivotIdx - 1, k);
    } else {
        return qs(arr, pivotIdx + 1, hi, k);
    }
}

function partition(arr: { v: number; f: number }[], lo: number, hi: number) {
    let idx = lo;

    for (let i = lo; i < hi; i++) {
        if (arr[i].f > arr[hi].f) {
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
            idx++;
        }
    }

    [arr[idx], arr[hi]] = [arr[hi], arr[idx]];

    return idx;
}
