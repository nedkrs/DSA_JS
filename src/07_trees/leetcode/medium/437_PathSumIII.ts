// Given the root of a binary tree and an integer targetSum,
// return the number of paths where the sum of the values along the path equals targetSum.
// The path does not need to start or end at the root or a leaf,
// but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:
// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.

// Example 2:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000

// Medium: https://leetcode.com/problems/path-sum-iii/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function PathSumIII(
    root: Node<number> | null,
    targetSum: number,
) {
    let res = 0;
    let prefixSumCount = new Map();

    function dfs(node: Node<number> | null, currSum: number) {
        if (!node) return;

        currSum += node.val;

        // Check if there is a subpath (ending at current node) sums up to targetSum.
        if (currSum === targetSum) {
            res++;
        }

        // Check if there is a prefix sum that enables a subpath summing to targetSum.
        let oldSum = currSum - targetSum;
        res += prefixSumCount.get(oldSum) || 0;

        // Update prefixSumCount with the current sum.
        prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1);

        // Continue the search
        dfs(node?.left || null, currSum);
        dfs(node?.right || null, currSum);

        // After visiting both subtrees, remove the current sum from the map
        // to avoid affecting other paths.
        prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1);
    }

    dfs(root, 0);

    return res;
}
