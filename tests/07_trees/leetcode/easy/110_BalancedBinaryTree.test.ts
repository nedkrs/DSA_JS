import BalancedBinaryTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/110_BalancedBinaryTree";

describe("BalancedBinaryTree", () => {
    test("returns true for an empty tree", () => {
        expect(BalancedBinaryTree(null)).toBe(true);
    });

    test("returns true for a single-node tree", () => {
        const root: Node<number> = { val: 1 };
        expect(BalancedBinaryTree(root)).toBe(true);
    });

    test("returns true for a balanced tree", () => {
        const root: Node<number> = {
            val: 3,
            left: { val: 2, left: { val: 1 }, right: null },
            right: { val: 4 },
        };
        expect(BalancedBinaryTree(root)).toBe(true);
    });

    test("returns false for an unbalanced tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: { val: 4 },
                },
            },
        };
        expect(BalancedBinaryTree(root)).toBe(false);
    });

    test("returns true for a complex balanced tree", () => {
        const root: Node<number> = {
            val: 5,
            left: {
                val: 3,
                left: { val: 2, left: { val: 1 }, right: null },
                right: { val: 4 },
            },
            right: {
                val: 8,
                left: { val: 7, left: { val: 6 }, right: null },
                right: { val: 9 },
            },
        };
        expect(BalancedBinaryTree(root)).toBe(true);
    });

    test("returns false for a complex unbalanced tree", () => {
        const root: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: {
                    val: 3,
                    right: { val: 4 },
                },
            },
        };
        expect(BalancedBinaryTree(root)).toBe(false);
    });
});
