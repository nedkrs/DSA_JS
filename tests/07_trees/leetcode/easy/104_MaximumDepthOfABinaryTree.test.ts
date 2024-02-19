import MaximumDepthOfABinaryTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/104_MaximumDepthOfABinaryTree";

function createNode<T>(val: T, left?: Node<T>, right?: Node<T>): Node<T> {
    return { val, left, right };
}

describe("MaximumDepthOfABinaryTree", () => {
    test("returns 0 for an empty tree", () => {
        expect(MaximumDepthOfABinaryTree(null)).toBe(0);
    });

    test("returns 1 for a tree with only one node", () => {
        const root = createNode(1);
        expect(MaximumDepthOfABinaryTree(root)).toBe(1);
    });

    test("returns correct depth for a left-heavy tree", () => {
        const root = createNode(1, createNode(2, createNode(3)));
        expect(MaximumDepthOfABinaryTree(root)).toBe(3);
    });

    test("returns correct depth for a balanced tree", () => {
        const root = createNode(1, createNode(2), createNode(3));
        expect(MaximumDepthOfABinaryTree(root)).toBe(2);
    });

    test("returns correct depth for a right-heavy tree", () => {
        const root = createNode(
            1,
            undefined,
            createNode(2, undefined, createNode(3)),
        );
        expect(MaximumDepthOfABinaryTree(root)).toBe(3);
    });

    test("returns correct depth for a complex tree", () => {
        const root = createNode(
            1,
            createNode(2, createNode(4), createNode(5)),
            createNode(3, undefined, createNode(6, undefined, createNode(7))),
        );
        expect(MaximumDepthOfABinaryTree(root)).toBe(4);
    });
});
