// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Hard: https://leetcode.com/problems/median-of-two-sorted-arrays/description/

export default function MedianOfTwoSortedArrays(
    nums1: number[],
    nums2: number[],
) {
    if (nums1.length > nums2.length) {
        [nums2, nums1] = [nums1, nums2];
    }

    let x = nums1.length;
    let y = nums2.length;

    let left = 0;
    let right = x;
    let median = 0;

    while (left <= right) {
        let partitionX = Math.floor((left + right) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];

        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (
                    (Math.max(maxLeftX, maxLeftY) +
                        Math.min(minRightX, minRightY)) /
                    2
                );
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }

    return median;
}
