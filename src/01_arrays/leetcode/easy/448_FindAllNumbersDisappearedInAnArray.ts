// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Easy: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

export default function FindAllNumbersDisappearedInAnArray(
    nums: number[],
): number[] {
    nums.forEach((val) => {
        const index: number = Math.abs(val) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    });

    return nums.reduce((acc: number[], val: number, idx: number): number[] => {
        if (val > 0) acc.push(idx + 1);
        return acc;
    }, []);
}

// Another way

// export default function FindAllNumbersDisappearedInAnArray(
//     nums: number[],
// ): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         while (nums[i] !== nums[nums[i] - 1]) {
//             let correctIdx = nums[i] - 1;
//             if (nums[i] === nums[correctIdx]) {
//                 break;
//             }
//             [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
//         }
//     }

//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i + 1) {
//             res.push(i + 1);
//         }
//     }
//     return res;
// }
