// Given an integer array nums that may contain duplicates, return all possible subsets
//  (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

// Medium: https://leetcode.com/problems/subsets-ii/description/

export default function Subsets2(nums: number[]) {
    let subsets: number[][] = [];
    generate(
        0,
        subsets,
        [],
        nums.sort((a, b) => a - b),
    );
    return subsets;
}

function generate(
    i: number,
    subsets: number[][],
    currSubset: number[],
    arr: number[],
) {
    if (i >= arr.length) {
        subsets.push(currSubset.slice());
        return;
    }

    // generate set with arr[i]
    currSubset.push(arr[i]);
    generate(i + 1, subsets, currSubset, arr);
    currSubset.pop();

    // generate set without arr[i]
    while (arr[i] === arr[i + 1]) i++;
    generate(i + 1, subsets, currSubset, arr);
}
