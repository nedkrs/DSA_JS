import DiameterOfBinaryTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/543_DiameterOfBinaryTree";

describe("DiameterOfBinaryTree Tests", () => {
    test("empty tree", () => {
        expect(DiameterOfBinaryTree(null)).toBe(0);
    });

    test("single node", () => {
        const root: Node<number> = { val: 1 };
        expect(DiameterOfBinaryTree(root)).toBe(0);
    });

    test("linear tree (e.g., linked list)", () => {
        const root: Node<number> = {
            val: 1,
            right: {
                val: 2,
                right: {
                    val: 3,
                },
            },
        };
        expect(DiameterOfBinaryTree(root)).toBe(2);
    });

    test("balanced tree", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2, left: { val: 4 }, right: { val: 5 } },
            right: { val: 3, left: { val: 6 }, right: { val: 7 } },
        };
        expect(DiameterOfBinaryTree(root)).toBe(4);
    });

    test("unbalanced tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 4,
                    left: { val: 6 },
                },
                right: { val: 5 },
            },
            right: { val: 3 },
        };
        expect(DiameterOfBinaryTree(root)).toBe(4);
    });
});
