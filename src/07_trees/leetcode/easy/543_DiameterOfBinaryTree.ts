// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

// Easy: https://leetcode.com/problems/diameter-of-binary-tree/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function DiameterOfBinaryTree(root: Node<number> | null) {
    let max = 0;

    function diameter(node: Node<number> | null): number {
        if (!node) return -1;

        let l = diameter(node?.left || null) + 1;
        let r = diameter(node?.right || null) + 1;
        max = Math.max(max, l + r);

        return Math.max(l, r);
    }

    diameter(root);

    return max;
}
