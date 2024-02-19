// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Easy: https://leetcode.com/problems/search-insert-position/description/

export default function SearchInsertPosition(
    nums: number[],
    target: number,
): number {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        }
    }

    return lo;
}
