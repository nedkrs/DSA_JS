import FlattenBinaryTreeToLinkedList, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/114_FlattenBinaryTreeToLinkedList";

function treeToArray(root: TreeNode) {
    const result = [];
    let current = root;
    while (current) {
        result.push(current.val);
        current = current.right!;
    }
    return result;
}

describe("FlattenBinaryTreeToLinkedList", () => {
    test("flattens an empty tree", () => {
        const root = null;
        FlattenBinaryTreeToLinkedList(root);
        expect(root).toBeNull();
    });

    test("flattens a single-node tree", () => {
        const root = new TreeNode(1);
        FlattenBinaryTreeToLinkedList(root);
        expect(treeToArray(root)).toEqual([1]);
    });

    test("flattens a full tree", () => {
        // Tree structure:
        //      1
        //     / \
        //    2   5
        //   / \   \
        //  3   4   6
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5, null, new TreeNode(6)),
        );
        FlattenBinaryTreeToLinkedList(root);
        expect(treeToArray(root)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("flattens a tree with only left children", () => {
        // Tree structure:
        //    1
        //   /
        //  2
        // /
        //3
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        FlattenBinaryTreeToLinkedList(root);
        expect(treeToArray(root)).toEqual([1, 2, 3]);
    });

    test("flattens a tree with only right children", () => {
        // Tree structure:
        // 1
        //  \
        //   2
        //    \
        //     3
        const root = new TreeNode(
            1,
            null,
            new TreeNode(2, null, new TreeNode(3)),
        );
        FlattenBinaryTreeToLinkedList(root);
        expect(treeToArray(root)).toEqual([1, 2, 3]);
    });
});
