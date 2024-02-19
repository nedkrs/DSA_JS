// Given the root of a binary search tree and the lowest and highest boundaries as low and high,
// trim the tree so that all its elements lies in [low, high].
// Trimming the tree should not change the relative structure of the elements that will remain in the tree
// (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.
// Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

// Example 1:

// Input: root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]

// Example 2:
// Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// Output: [3,2,null,1]

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 0 <= Node.val <= 104
// The value of each node in the tree is unique.
// root is guaranteed to be a valid binary search tree.
// 0 <= low <= high <= 104

// Medium: https://leetcode.com/problems/trim-a-binary-search-tree/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function TrimABinarySearchTree(
    root: Node<number> | null,
    low: number,
    high: number,
) {
    return trim(root, low, high);
}

function trim(
    node: Node<number> | null,
    low: number,
    high: number,
): Node<number> | null {
    if (!node) return null;

    node.left = trim(node?.left || null, low, high);
    node.right = trim(node?.right || null, low, high);

    if (node.val >= low && node.val <= high) return node;
    if (node.val < low) return node.right;
    if (node.val > high) return node.left;
    return null;
}
