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
export default function BinaryTreeInorderTraversal(root: TreeNode | null) {
    let res: number[] = [];
    inOrder(root, res);
    return res;
}

function inOrder(node: TreeNode | null, res: number[]): void {
    if (node) {
        inOrder(node.left, res);
        res.push(node.val);
        inOrder(node.right, res);
    }
}
