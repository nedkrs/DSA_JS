import PathSum, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/112_PathSum";

describe("PathSum", () => {
    test("returns true for a tree with a root-to-leaf path sum equal to targetSum", () => {
        const root: Node<number> = {
            val: 5,
            left: {
                val: 4,
                left: {
                    val: 11,
                    left: { val: 7, left: null, right: null },
                    right: { val: 2, left: null, right: null },
                },
                right: null,
            },
            right: {
                val: 8,
                left: { val: 13 },
                right: {
                    val: 4,
                    left: null,
                    right: { val: 1 },
                },
            },
        };
        const targetSum = 22;
        expect(PathSum(root, targetSum)).toBe(true);
    });

    test("returns false when no root-to-leaf path sum equals targetSum", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };
        const targetSum = 5;
        expect(PathSum(root, targetSum)).toBe(false);
    });

    test("returns false for an empty tree", () => {
        const root = null;
        const targetSum = 0;
        expect(PathSum(root, targetSum)).toBe(false);
    });

    test("handles negative values in the path and targetSum", () => {
        const root: Node<number> = {
            val: -2,
            left: null,
            right: { val: -3, left: null, right: null },
        };
        const targetSum = -5;
        expect(PathSum(root, targetSum)).toBe(true);
    });

    test("returns true for a single-node tree where the node's value equals targetSum", () => {
        const root: Node<number> = { val: 1, left: null, right: null };
        const targetSum = 1;
        expect(PathSum(root, targetSum)).toBe(true);
    });
});
