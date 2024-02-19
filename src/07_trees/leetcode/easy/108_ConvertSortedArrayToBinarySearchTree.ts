// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

//  Easy: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function ConvertSortedArrayToBinarySearchTree(nums: number[]) {
    function createBST(left: number, right: number): Node<number> | null {
        if (left > right) return null;

        let mid = Math.floor((left + right) / 2);
        let node: Node<number> = {
            val: nums[mid],
            left: createBST(left, mid - 1),
            right: createBST(mid + 1, right),
        };

        return node;
    }

    return createBST(0, nums.length - 1);
}
