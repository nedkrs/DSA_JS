import BinaryTreeInOrderTraversal, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/easy/94_BinaryTreeInOrderTraversal";

describe("inorderTraversal", () => {
    test("traverses a binary tree in inorder", () => {
        // Constructing the binary tree:
        //     1
        //      \
        //       2
        //      /
        //     3
        const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(BinaryTreeInOrderTraversal(tree)).toEqual([1, 3, 2]);
    });

    test("returns an empty array for an empty tree", () => {
        const tree = null;
        expect(BinaryTreeInOrderTraversal(tree)).toEqual([]);
    });

    test("traverses a single-node tree", () => {
        const tree = new TreeNode(1);
        expect(BinaryTreeInOrderTraversal(tree)).toEqual([1]);
    });

    test("traverses a more complex tree", () => {
        // Constructing a more complex binary tree:
        //      4
        //     / \
        //    2   5
        //   / \
        //  1   3
        const tree = new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(5),
        );
        expect(BinaryTreeInOrderTraversal(tree)).toEqual([1, 2, 3, 4, 5]);
    });
});
