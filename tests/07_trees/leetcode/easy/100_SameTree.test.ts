import SameTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/100_SameTree";

describe("SameTree", () => {
    test("returns true for two identical trees", () => {
        const tree1: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };

        const tree2: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };

        expect(SameTree(tree1, tree2)).toBe(true);
    });

    test("returns false for trees with different structures", () => {
        const tree1: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: null,
        };

        const tree2: Node<number> = {
            val: 1,
            left: null,
            right: { val: 2, left: null, right: null },
        };

        expect(SameTree(tree1, tree2)).toBe(false);
    });

    test("returns false for trees with different values", () => {
        const tree1: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };

        const tree2: Node<number> = {
            val: 1,
            left: { val: 3, left: null, right: null },
            right: { val: 2, left: null, right: null },
        };

        expect(SameTree(tree1, tree2)).toBe(false);
    });

    test("returns true for two empty trees", () => {
        expect(SameTree(null, null)).toBe(true);
    });

    test("returns false when one tree is empty and the other is not", () => {
        const tree: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };

        expect(SameTree(tree, null)).toBe(false);
        expect(SameTree(null, tree)).toBe(false);
    });

    test("handles larger and more complex trees", () => {
        const tree1: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: null,
            },
            right: {
                val: 5,
                left: null,
                right: { val: 2, left: null, right: null },
            },
        };

        const tree2: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: null,
            },
            right: {
                val: 5,
                left: null,
                right: { val: 2, left: null, right: null },
            },
        };

        expect(SameTree(tree1, tree2)).toBe(true);

        const tree3: Node<number> = {
            val: 3,
            left: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: { val: 9, left: null, right: null }, // Difference here
            },
            right: {
                val: 5,
                left: null,
                right: { val: 2, left: null, right: null },
            },
        };

        expect(SameTree(tree1, tree3)).toBe(false);
    });
});
