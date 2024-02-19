import LowestCommonAncestorOfABinarySearchTree, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/235_LowestCommonAncestorOfABinarySearchTree";

describe("LowestCommonAncestorOfABinarySearchTree", () => {
    // Directly constructing the BST as per your example
    const root: Node<number> = {
        val: 6,
        left: {
            val: 2,
            left: {
                val: 0,
                left: null,
                right: null,
            },
            right: {
                val: 4,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: {
                    val: 5,
                    left: null,
                    right: null,
                },
            },
        },
        right: {
            val: 8,
            left: {
                val: 7,
                left: null,
                right: null,
            },
            right: {
                val: 9,
                left: null,
                right: null,
            },
        },
    };

    test("LCA of 2 and 8 should be 6", () => {
        const p = root.left!;
        const q = root.right!;
        const lcaNode = LowestCommonAncestorOfABinarySearchTree(root, p, q);
        expect(lcaNode?.val).toBe(6);
    });

    test("LCA of 2 and 4 should be 2", () => {
        const p = root.left!;
        const q = root.left!.right!;
        const lcaNode = LowestCommonAncestorOfABinarySearchTree(root, p, q);
        expect(lcaNode?.val).toBe(2);
    });

    test("LCA of 3 and 5 should be 4", () => {
        const p = root.left!.right!.left!;
        const q = root.left!.right!.right!;
        const lcaNode = LowestCommonAncestorOfABinarySearchTree(root, p, q);
        expect(lcaNode?.val).toBe(4);
    });

    test("LCA of 0 and 5 should be 2", () => {
        const p = root.left!.left!;
        const q = root.left!.right!.right!;
        const lcaNode = LowestCommonAncestorOfABinarySearchTree(root, p, q);
        expect(lcaNode?.val).toBe(2);
    });
});
