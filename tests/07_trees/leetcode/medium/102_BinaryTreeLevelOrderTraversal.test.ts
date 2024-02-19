import BinaryTreeLevelOrderTraversal, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/102_BinaryTreeLevelOrderTraversal";

describe("BinaryTreeLevelOrderTraversal", () => {
    test("multiple levels", () => {
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        );
        expect(BinaryTreeLevelOrderTraversal(root)).toEqual([
            [3],
            [9, 20],
            [15, 7],
        ]);
    });

    test("single node", () => {
        const root = new TreeNode(1);
        expect(BinaryTreeLevelOrderTraversal(root)).toEqual([[1]]);
    });

    test("empty tree", () => {
        const root = null;
        expect(BinaryTreeLevelOrderTraversal(root)).toEqual([]);
    });

    test("tree with only left children", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null),
            null,
        );
        expect(BinaryTreeLevelOrderTraversal(root)).toEqual([
            [1],
            [2],
            [3],
            [4],
        ]);
    });

    test("tree with only right children", () => {
        const root = new TreeNode(
            1,
            null,
            new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))),
        );
        expect(BinaryTreeLevelOrderTraversal(root)).toEqual([
            [1],
            [2],
            [3],
            [4],
        ]);
    });
});
