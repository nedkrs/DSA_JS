export default function dfs_on_bst(
    head: BinaryNode<number> | null | undefined,
    needle: number,
): boolean {
    if (!head) {
        return false;
    }

    if (head.value === needle) {
        return true;
    } else if (head.value < needle) {
        return dfs_on_bst(head.right, needle);
    } else {
        return dfs_on_bst(head.left, needle);
    }
}
