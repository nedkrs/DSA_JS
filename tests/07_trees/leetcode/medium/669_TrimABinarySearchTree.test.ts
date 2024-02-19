import TrimABinarySearchTree, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/669_TrimABinarySearchTree";

function treeToArray(root: Node<number> | null): (number | null)[] {
    const result: (number | null)[] = [];
    const queue: (Node<number> | null)[] = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node !== null) {
            result.push(node?.val as number);
            queue.push(node?.left || null);
            queue.push(node?.right || null);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

describe("TrimABinarySearchTree", () => {
    test("Example 1", () => {
        const root: Node<number> = {
            val: 1,
            left: null,
            right: { val: 2, left: null, right: null },
        };
        const trimmed = TrimABinarySearchTree(root, 1, 2);
        expect(treeToArray(trimmed)).toEqual([1, null, 2]);
    });

    test("Example 2", () => {
        const root: Node<number> = {
            val: 3,
            left: {
                val: 0,
                left: null,
                right: {
                    val: 2,
                    left: { val: 1, left: null, right: null },
                    right: null,
                },
            },
            right: { val: 4, left: null, right: null },
        };
        const trimmed = TrimABinarySearchTree(root, 1, 3);
        expect(treeToArray(trimmed)).toEqual([3, 2, null, 1]);
    });

    test("Trim to single node", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 0, left: null, right: null },
            right: { val: 2, left: null, right: null },
        };
        const trimmed = TrimABinarySearchTree(root, 2, 2);
        expect(treeToArray(trimmed)).toEqual([2]);
    });

    test("Trim out all nodes", () => {
        const root: Node<number> = {
            val: 1,
            left: { val: 0, left: null, right: null },
            right: { val: 2, left: null, right: null },
        };
        const trimmed = TrimABinarySearchTree(root, 5, 10);
        expect(treeToArray(trimmed)).toEqual([]);
    });

    test("No trimming needed", () => {
        const root: Node<number> = {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 3, left: null, right: null },
        };
        const trimmed = TrimABinarySearchTree(root, 1, 3);
        expect(treeToArray(trimmed)).toEqual([2, 1, 3]);
    });
});
