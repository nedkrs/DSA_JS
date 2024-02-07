// Given a collection of numbers, nums, that might contain duplicates,
// return all possible unique permutations in any order.

// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

//  Medium: https://leetcode.com/problems/permutations-ii/description/

export default function Permutations(nums: number[]) {
    let result: number[][] = [];
    generate(
        nums.sort((a, b) => a - b),
        [],
        nums.length,
        result,
    );
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
        if (arr[i] === arr[i + 1]) continue;
        let currArr = arr.slice();
        let next = currArr.splice(i, 1);
        generate(currArr, currPerm.concat(next), size, result);
    }
}
