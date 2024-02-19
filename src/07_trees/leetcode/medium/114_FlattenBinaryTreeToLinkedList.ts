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

export default function FlattenBinaryTreeToLinkedList(root: TreeNode | null) {
    return treeToList(root);
}

function treeToList(node: TreeNode | null) {
    if (!node) return null;

    let left = treeToList(node.left);
    let right = treeToList(node.right);

    if (left) {
        let temp = left;
        while (temp.right !== null) {
            temp = temp.right;
        }
        temp.right = right;
        node.right = left;
        node.left = null;
    }

    return node;
}
