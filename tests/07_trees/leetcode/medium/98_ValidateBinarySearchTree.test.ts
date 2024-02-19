import ValidateBinarySearchTree, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/98_ValidateBinarySearchTree";

describe("ValidateBinarySearchTree", () => {
    test("single node tree should be valid", () => {
        const root = new TreeNode(1);
        expect(ValidateBinarySearchTree(root)).toBe(true);
    });

    test("valid BST should return true", () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(ValidateBinarySearchTree(root)).toBe(true);
    });

    test("invalid BST with incorrect left child should return false", () => {
        const root = new TreeNode(
            5,
            new TreeNode(1),
            new TreeNode(4, new TreeNode(3), new TreeNode(6)),
        );
        expect(ValidateBinarySearchTree(root)).toBe(false);
    });

    test("invalid BST with incorrect right child should return false", () => {
        const root = new TreeNode(
            10,
            new TreeNode(5),
            new TreeNode(15, new TreeNode(6), new TreeNode(20)),
        );
        expect(ValidateBinarySearchTree(root)).toBe(false);
    });

    test("larger valid BST should return true", () => {
        const root = new TreeNode(
            8,
            new TreeNode(
                3,
                new TreeNode(1),
                new TreeNode(6, new TreeNode(4), new TreeNode(7)),
            ),
            new TreeNode(10, null, new TreeNode(14, new TreeNode(13))),
        );
        expect(ValidateBinarySearchTree(root)).toBe(true);
    });

    test("BST with duplicate values should return false", () => {
        const root = new TreeNode(2, new TreeNode(2), new TreeNode(2));
        expect(ValidateBinarySearchTree(root)).toBe(false);
    });
});
