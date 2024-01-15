export default function bt_pre_order(node: BinaryNode<number>): number[] {
    const path: number[] = [];
    traverse(node, path);
    return path;
}

function traverse(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }

    path.push(node.value);
    traverse(node.left, path);
    traverse(node.right, path);
}
