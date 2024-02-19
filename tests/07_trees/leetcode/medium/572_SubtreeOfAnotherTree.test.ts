import IsSubtreeOfATree, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/572_SubtreeOfAnotherTree";

describe("IsSubtreeOfATree", () => {
    test("returns true when subRoot is a subtree of root", () => {
        const root: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: { val: 2, left: null, right: null },
            },
            right: { val: 5, left: null, right: null },
        };

        const subRoot: Node<number> = {
            val: 4,
            left: { val: 1, left: null, right: null },
            right: { val: 2, left: null, right: null },
        };

        expect(IsSubtreeOfATree(root, subRoot)).toBe(true);
    });

    test("returns false when subRoot is not a subtree of root due to additional nodes", () => {
        const root: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: {
                    val: 2,
                    left: null,
                    right: { val: 0, left: null, right: null },
                },
            },
            right: { val: 5, left: null, right: null },
        };

        const subRoot: Node<number> = {
            val: 4,
            left: { val: 1, left: null, right: null },
            right: { val: 2, left: null, right: null },
        };

        expect(IsSubtreeOfATree(root, subRoot)).toBe(false);
    });

    test("returns true when both root and subRoot are the same tree", () => {
        const tree: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };

        expect(IsSubtreeOfATree(tree, tree)).toBe(true);
    });

    test("returns false when root is empty", () => {
        const subRoot: Node<number> = {
            val: 1,
            left: null,
            right: null,
        };

        expect(IsSubtreeOfATree(null, subRoot)).toBe(false);
    });

    test("returns true when subRoot is empty and root is not", () => {
        const root: Node<number> = {
            val: 1,
            left: null,
            right: null,
        };

        expect(IsSubtreeOfATree(root, null)).toBe(false);
    });

    test("handles larger and more complex trees", () => {
        const root: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: {
                    val: 2,
                    left: { val: 0, left: null, right: null },
                    right: null,
                },
            },
            right: { val: 5, left: null, right: null },
        };

        const subRoot: Node<number> = {
            val: 4,
            left: { val: 1, left: null, right: null },
            right: {
                val: 2,
                left: { val: 0, left: null, right: null },
                right: null,
            },
        };

        expect(IsSubtreeOfATree(root, subRoot)).toBe(true);
    });

    test("returns false for non-matching subtree with the same root value", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null,
            },
            right: {
                val: 3,
                left: null,
                right: null,
            },
        };

        const subRoot: Node<number> = {
            val: 2,
            left: { val: 4, left: null, right: null },
            right: null,
        };

        expect(IsSubtreeOfATree(root, subRoot)).toBe(false);
    });
});
