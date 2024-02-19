// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

// Easy: https://leetcode.com/problems/symmetric-tree/description/

export type Node<T> = {
    val: T;
    left?: Node<T>;
    right?: Node<T>;
};

export default function isSymmetric(root: Node<number> | undefined) {
    return run(root?.left, root?.right);
}

function run(
    node1: Node<number> | undefined,
    node2: Node<number> | undefined,
): boolean {
    if (node1 === undefined && node2 === undefined) {
        return true;
    }

    if (node1 === null && node2 === null) {
        return true;
    }

    if (node1 === null || node2 === null) {
        return false;
    }
    if (node1?.val !== node2?.val) {
        return false;
    }

    let outSide = run(node1?.left, node2?.right);
    let inSide = run(node1?.right, node2?.left);
    return outSide && inSide;
}
