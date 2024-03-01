// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Easy: https://leetcode.com/problems/binary-tree-postorder-traversal/description/

export type Node<T> = {
    val: T;
    left?: Node<T> | null;
    right?: Node<T> | null;
};

export default function PostorderTraversal(root: Node<number> | null) {
    let res: number[] = [];

    function traverse(node: Node<number> | null) {
        if (!node) return;

        traverse(node?.left || null);
        traverse(node?.right || null);
        res.push(node.val);
    }

    traverse(root);

    return res;
}
