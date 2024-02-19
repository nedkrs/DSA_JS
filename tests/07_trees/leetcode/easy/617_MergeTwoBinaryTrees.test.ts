import MergeTwoBinaryTrees, {
    Node,
} from "../../../../src/07_trees/leetcode/easy//617_MergeTwoBinaryTrees";

function buildTree(list: (number | null)[], index = 0): Node<number> | null {
    if (index < list.length && list[index] !== null) {
        return {
            val: list[index] as number,
            left: buildTree(list, 2 * index + 1),
            right: buildTree(list, 2 * index + 2),
        };
    }
    return null;
}

function treeToList(root: Node<number> | null) {
    const list = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            list.push(node.val);
            queue.push(node.left || null);
            queue.push(node.right || null);
        } else {
            list.push(null);
        }
    }
    while (list[list.length - 1] === null) {
        list.pop();
    }
    return list;
}

describe("MergeTwoBinaryTrees", () => {
    test("merges two binary trees correctly - Example 1", () => {
        const root1 = buildTree([1, 3, 2, 5]);
        const root2 = buildTree([2, 1, 3, null, 4, null, 7]);
        const mergedTree = MergeTwoBinaryTrees(root1, root2);
        expect(treeToList(mergedTree)).toEqual([3, 4, 5, 5, 4, null, 7]);
    });

    test("merges two binary trees correctly - Example 2", () => {
        const root1 = buildTree([1]);
        const root2 = buildTree([1, 2]);
        const mergedTree = MergeTwoBinaryTrees(root1, root2);
        expect(treeToList(mergedTree)).toEqual([2, 2]);
    });

    test("merges a tree with a null tree", () => {
        const root1 = buildTree([1, 2]);
        const mergedTree = MergeTwoBinaryTrees(root1, null);
        expect(treeToList(mergedTree)).toEqual([1, 2]);
    });

    test("merges null trees", () => {
        const mergedTree = MergeTwoBinaryTrees(null, null);
        expect(mergedTree).toBeNull();
    });
});
