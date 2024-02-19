import LongestUnivaluePath, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/687_LongestUnivaluePath";

describe("LongestUnivaluePath", () => {
    test("tree with uniform values", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 1,
                left: { val: 1, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
            right: {
                val: 1,
                left: { val: 1, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
        };
        expect(LongestUnivaluePath(root)).toBe(4);
    });

    test("tree with distinct paths of same values", () => {
        const root: Node<number> = {
            val: 5,
            left: {
                val: 4,
                left: { val: 4, left: null, right: null },
                right: null,
            },
            right: {
                val: 5,
                left: {
                    val: 5,
                    left: { val: 5, left: null, right: null },
                    right: null,
                },
                right: { val: 5, left: null, right: null },
            },
        };
        expect(LongestUnivaluePath(root)).toBe(3);
    });

    test("empty tree", () => {
        expect(LongestUnivaluePath(null)).toBe(0);
    });

    test("tree with single node", () => {
        const root: Node<number> = { val: 1, left: null, right: null };
        expect(LongestUnivaluePath(root)).toBe(0);
    });

    test("tree with no repeating values", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };
        expect(LongestUnivaluePath(root)).toBe(0);
    });
});
