export default function bt_post_order(node: BinaryNode<number>): number[] {
    const path: number[] = [];
    traverse(node, path);
    return path;
}

function traverse(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }

    traverse(node.left, path);
    traverse(node.right, path);
    path.push(node.value);
}
