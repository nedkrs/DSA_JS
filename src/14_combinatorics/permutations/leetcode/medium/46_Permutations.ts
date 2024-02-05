// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// Medium: https://leetcode.com/problems/permutations/description/

export default function getPermutations(nums: number[]) {
    let result: number[][] = [];
    generate(nums, [], nums.length, result);
    return result;
}

function generate(
    arr: number[],
    currPerm: number[],
    size: number,
    result: number[][],
) {
    if (currPerm.length === size) {
        result.push(currPerm.slice());
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let currArr = arr.slice();
        let next = currArr.splice(i, 1);
        generate(currArr, currPerm.concat(next), size, result);
    }
}
