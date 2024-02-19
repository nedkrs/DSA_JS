// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

// Medium: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

export default function KthLargestElementInAnArray(nums: number[], k: number) {
    return qs(nums, 0, nums.length - 1, k - 1);
}

function qs(arr: number[], lo: number, hi: number, k: number) {
    let [left, right] = partition(arr, lo, hi);

    if (left <= k && k <= right) return arr[k];
    else if (k < left) return qs(arr, lo, left - 1, k);
    else return qs(arr, right + 1, hi, k);
}

function partition(arr: number[], lo: number, hi: number) {
    let pivot = arr[hi];
    let left = lo;
    let i = lo;
    let right = hi - 1;

    while (i <= right) {
        if (arr[i] > pivot) {
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
            i++;
        } else if (arr[i] < pivot) {
            [arr[right], arr[i]] = [arr[i], arr[right]];
            right--;
        } else {
            i++;
        }
    }

    [arr[hi], arr[i]] = [arr[i], arr[hi]];
    return [left, i];
}
