import BinaryTreePostorderTraversal, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/145_BinaryTreePostorderTraversal";

describe("BinaryTreePostorderTraversal", () => {
    test("should return an empty array for an empty tree", () => {
        expect(BinaryTreePostorderTraversal(null)).toEqual([]);
    });

    test("should return the correct postorder traversal for a single node", () => {
        const root: Node<number> = { val: 1, left: null, right: null };
        expect(BinaryTreePostorderTraversal(root)).toEqual([1]);
    });

    test("should return the correct postorder traversal for a complete binary tree", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };
        expect(BinaryTreePostorderTraversal(root)).toEqual([2, 3, 1]);
    });

    test("should handle trees with multiple levels", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: { val: 5, left: null, right: null },
            },
            right: { val: 3, left: null, right: null },
        };
        expect(BinaryTreePostorderTraversal(root)).toEqual([4, 5, 2, 3, 1]);
    });

    test("should handle right-heavy trees", () => {
        const root: Node<number> = {
            val: 1,
            left: null,
            right: {
                val: 2,
                right: { val: 3, left: null, right: null },
                left: null,
            },
        };
        expect(BinaryTreePostorderTraversal(root)).toEqual([3, 2, 1]);
    });

    test("should handle left-heavy trees", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 3, left: null, right: null },
                right: null,
            },
            right: null,
        };
        expect(BinaryTreePostorderTraversal(root)).toEqual([3, 2, 1]);
    });
});
