import PathSumIII, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/437_PathSumIII";

describe("PathSumIII", () => {
    test("Example 1: Tree with multiple paths summing to the target", () => {
        const root: Node<number> = {
            val: 10,
            left: {
                val: 5,
                left: {
                    val: 3,
                    left: { val: 3, left: null, right: null },
                    right: { val: -2, left: null, right: null },
                },
                right: {
                    val: 2,
                    right: { val: 1, left: null, right: null },
                },
            },
            right: {
                val: -3,
                right: { val: 11, left: null, right: null },
            },
        };
        expect(PathSumIII(root, 8)).toBe(3);
    });

    test("Example 2: Tree with paths summing to 22", () => {
        const root: Node<number> = {
            val: 5,
            left: {
                val: 4,
                left: {
                    val: 11,
                    left: { val: 7, left: null, right: null },
                    right: { val: 2, left: null, right: null },
                },
            },
            right: {
                val: 8,
                left: { val: 13, left: null, right: null },
                right: {
                    val: 4,
                    left: { val: 5, left: null, right: null },
                    right: { val: 1, left: null, right: null },
                },
            },
        };
        expect(PathSumIII(root, 22)).toBe(3);
    });

    test("Empty tree should result in 0 paths", () => {
        expect(PathSumIII(null, 8)).toBe(0);
    });

    test("Tree with no paths summing to the target", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };
        expect(PathSumIII(root, 5)).toBe(0);
    });
});
