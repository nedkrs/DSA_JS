import HouseRobberIII, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/337_HouseRobberIII";

describe("HouseRobberIII", () => {
    test("single node tree", () => {
        const root = new TreeNode(2);
        expect(HouseRobberIII(root)).toBe(2);
    });

    test("balanced tree", () => {
        // Create a balanced tree:
        //       3
        //      / \
        //     2   3
        //      \   \
        //       3   1
        const root = new TreeNode(
            3,
            new TreeNode(2, null, new TreeNode(3)),
            new TreeNode(3, null, new TreeNode(1)),
        );
        expect(HouseRobberIII(root)).toBe(7);
    });

    test("unbalanced tree", () => {
        // Create an unbalanced tree:
        //         3
        //        /
        //       4
        //      / \
        //     1   3
        //    /
        //   5
        const root = new TreeNode(
            3,
            new TreeNode(
                4,
                new TreeNode(1, new TreeNode(5), null),
                new TreeNode(3),
            ),
            null,
        );
        expect(HouseRobberIII(root)).toBe(11);
    });

    test("empty tree", () => {
        const root = null;
        expect(HouseRobberIII(root)).toBe(0);
    });

    test("complex tree", () => {
        // Create a more complex tree to test various branches and depths:
        //         10
        //        /  \
        //       2    10
        //      / \     \
        //     1   3     25
        //          \   /  \
        //          1  4    5
        const root = new TreeNode(
            10,
            new TreeNode(
                2,
                new TreeNode(1),
                new TreeNode(3, null, new TreeNode(1)),
            ),
            new TreeNode(
                10,
                null,
                new TreeNode(25, new TreeNode(4), new TreeNode(5)),
            ),
        );
        expect(HouseRobberIII(root)).toBe(10 + 1 + 3 + 25);
    });
});
