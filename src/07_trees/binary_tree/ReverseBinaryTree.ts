export default function reverse_bt(
    node: BinaryNode<number>,
): BinaryNode<number> {
    traverse(node);
    return node;
}

function traverse(node: BinaryNode<number> | null): void {
    if (node === null) {
        return;
    }

    let tmp = node.right;
    node.right = node.left;
    node.left = tmp;

    traverse(node.left);
    traverse(node.right);
}
