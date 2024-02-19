// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Easy: https://leetcode.com/problems/invert-binary-tree/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function InvertBinaryTree(
    root: Node<number> | null,
): Node<number> | null {
    return invert(root);
}

function invert(node: Node<number> | null | undefined): Node<number> | null {
    if (!node) {
        return null;
    }

    let left = invert(node.left);
    let right = invert(node.right);

    node.left = right;
    node.right = left;

    return node;
}
