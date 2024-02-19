// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// Medium: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

export default function FindFirstAndLastPositionOfElementInSortedArray(
    nums: number[],
    target: number,
) {
    const result = [-1, -1];

    result[0] = findStartingIndex(nums, target);
    result[1] = findEndingIndex(nums, target);

    return result;
}

function findStartingIndex(nums: number[], target: number) {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        if (nums[mid] === target) index = mid;
    }

    return index;
}

function findEndingIndex(nums: number[], target: number) {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        if (nums[mid] === target) index = mid;
    }

    return index;
}
