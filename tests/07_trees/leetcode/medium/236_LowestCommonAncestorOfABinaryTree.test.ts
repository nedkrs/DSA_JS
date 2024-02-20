import LowestCommonAncestorOfABinaryTree, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/236_LowestCommonAncestorOfABinaryTree";

describe("LowestCommonAncestorOfABinaryTree", () => {
    test("finds LCA of two nodes in a binary tree", () => {
        // Build the tree:
        //      3
        //     / \
        //    5   1
        //   /|   |\
        //  6 2   0 8
        //    /|
        //   7 4
        const root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);

        const p = root.left;
        const q = root.right;

        const lcaNode = LowestCommonAncestorOfABinaryTree(root, p, q);

        expect(lcaNode).not.toBe(false);
        if (lcaNode !== false && lcaNode !== true) {
            expect(lcaNode.val).toBe(3);
        }
    });

    test("finds LCA when one node is ancestor of the other", () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(1);

        const p = root;
        const q = root.left;

        const lcaNode = LowestCommonAncestorOfABinaryTree(root, p, q);

        expect(lcaNode).not.toBe(false);
        if (lcaNode !== false && lcaNode !== true) {
            expect(lcaNode.val).toBe(2);
        }
    });

    test("returns null for nodes not in the tree", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);

        const p = new TreeNode(3);
        const q = new TreeNode(4);

        const lcaNode = LowestCommonAncestorOfABinaryTree(root, p, q);

        expect(lcaNode).toBeFalsy();
    });
});
