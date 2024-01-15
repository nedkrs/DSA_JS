export default function compare(
    nodeA: BinaryNode<number> | null | undefined,
    nodeB: BinaryNode<number> | null | undefined,
): boolean {
    if (nodeA === undefined && nodeB === undefined) {
        return true;
    }

    if (nodeA === undefined || nodeB === undefined) {
        return false;
    }

    if (nodeA?.value !== nodeB?.value) {
        return false;
    }

    return (
        compare(nodeA?.left, nodeB?.left) && compare(nodeA?.right, nodeB?.right)
    );
}
