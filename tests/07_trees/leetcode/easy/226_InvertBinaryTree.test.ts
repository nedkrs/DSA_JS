import InvertBinaryTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/226_InvertBinaryTree";

describe("InvertBinaryTree", () => {
    test("inverts an empty tree", () => {
        const root: Node<number> | null = null;
        expect(InvertBinaryTree(root)).toBe(null);
    });

    test("inverts a single node tree", () => {
        const root: Node<number> = { val: 1, left: null, right: null };
        const expected: Node<number> = { val: 1, left: null, right: null };
        expect(InvertBinaryTree(root)).toEqual(expected);
    });

    test("inverts a tree with only left children", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 3, left: null, right: null },
                right: null,
            },
            right: null,
        };
        const expected: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: { val: 3, left: null, right: null },
                left: null,
            },
            left: null,
        };
        expect(InvertBinaryTree(root)).toEqual(expected);
    });

    test("inverts a tree with only right children", () => {
        const root: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: { val: 3, left: null, right: null },
                left: null,
            },
            left: null,
        };
        const expected: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 3, left: null, right: null },
                right: null,
            },
            right: null,
        };
        expect(InvertBinaryTree(root)).toEqual(expected);
    });

    test("inverts a full binary tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: { val: 5, left: null, right: null },
            },
            right: {
                val: 3,
                left: { val: 6, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        };
        const expected: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: { val: 4, left: null, right: null },
                left: { val: 5, left: null, right: null },
            },
            left: {
                val: 3,
                right: { val: 6, left: null, right: null },
                left: { val: 7, left: null, right: null },
            },
        };
        expect(InvertBinaryTree(root)).toEqual(expected);
    });

    test("inverts a more complex binary tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: {
                    val: 5,
                    left: { val: 7, left: null, right: null },
                    right: { val: 8, left: null, right: null },
                },
            },
            right: {
                val: 3,
                right: { val: 6, left: null, right: null },
                left: null,
            },
        };
        const expected: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: { val: 4, left: null, right: null },
                left: {
                    val: 5,
                    right: { val: 7, left: null, right: null },
                    left: { val: 8, left: null, right: null },
                },
            },
            left: {
                val: 3,
                left: { val: 6, left: null, right: null },
                right: null,
            },
        };
        expect(InvertBinaryTree(root)).toEqual(expected);
    });
});
