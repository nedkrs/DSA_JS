// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a
// binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

// Medium: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export default function ConstructBinaryTreeFromPreorderAndInorderTraversal(
    preorder: number[],
    inorder: number[],
) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    let rootVal = preorder[0];
    let root: TreeNode = { val: rootVal, left: null, right: null };

    let mid = inorder.indexOf(rootVal);

    root.left = ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder.slice(1, mid + 1),
        inorder.slice(0, mid),
    );
    root.right = ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder.slice(mid + 1),
        inorder.slice(mid + 1),
    );

    return root;
}
