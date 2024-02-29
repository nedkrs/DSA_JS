import BinaryTreeMaximumPathSum, {
    Node,
} from "../../../../src/07_trees/leetcode/hard/124_BinaryTreeMaximumPathSum";

describe("BinaryTreeMaximumPathSum", () => {
    test("single node tree", () => {
        const root: Node<number> = { val: 1 };
        expect(BinaryTreeMaximumPathSum(root)).toBe(1);
    });

    test("left heavy tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 4 },
                right: { val: 5 },
            },
            right: { val: 3 },
        };
        expect(BinaryTreeMaximumPathSum(root)).toBe(11); // 4 + 2 + 5
    });

    test("right heavy tree", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2 },
            right: {
                val: 3,
                left: { val: 6 },
                right: {
                    val: 7,
                    right: { val: 8 },
                },
            },
        };
        expect(BinaryTreeMaximumPathSum(root)).toBe(24); // 8 + 7 + 3 + 6
    });

    test("tree with negative values", () => {
        const root: Node<number> = {
            val: -10,
            left: {
                val: 9,
            },
            right: {
                val: 20,
                left: { val: 15 },
                right: { val: 7 },
            },
        };
        expect(BinaryTreeMaximumPathSum(root)).toBe(42); // 15 + 20 + 7
    });

    test("complex tree", () => {
        const root: Node<number> = {
            val: 10,
            left: {
                val: 2,
                left: { val: 20 },
                right: {
                    val: 1,
                    left: { val: -25, left: { val: 3 }, right: { val: 4 } },
                },
            },
            right: { val: 10 },
        };
        expect(BinaryTreeMaximumPathSum(root)).toBe(42); // 20 + 2 + 10 + 10
    });
});
