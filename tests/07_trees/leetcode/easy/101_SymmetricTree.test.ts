import isSymmetric, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/101_SymmetricTree";

describe("isSymmetric", () => {
    test("is symmetric for an empty tree", () => {
        const root: Node<number> | undefined = undefined;
        expect(isSymmetric(root)).toBe(true);
    });

    test("is symmetric for a single node tree", () => {
        const root: Node<number> = { val: 1 };
        expect(isSymmetric(root)).toBe(true);
    });

    test("is symmetric for a simple symmetric tree", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2 },
            right: { val: 2 },
        };
        expect(isSymmetric(root)).toBe(true);
    });

    test("is not symmetric for a simple asymmetric tree", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2 },
            right: { val: 3 },
        };
        expect(isSymmetric(root)).toBe(false);
    });

    test("is symmetric for a complex symmetric tree", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 3 },
                right: { val: 4 },
            },
            right: {
                val: 2,
                left: { val: 4 },
                right: { val: 3 },
            },
        };
        expect(isSymmetric(root)).toBe(true);
    });

    test("is not symmetric for a complex asymmetric tree with value mismatch", () => {
        const root: Node<number> = {
            val: 1,
            left: {
                val: 2,
                left: { val: 3 },
                right: { val: 4 },
            },
            right: {
                val: 2,
                left: { val: 4 },
                right: { val: 5 }, // This makes the tree asymmetric
            },
        };
        expect(isSymmetric(root)).toBe(false);
    });
});
