import ConvertBSTtoGreaterTree, {
    Node,
} from "../../../../src/07_trees/leetcode/medium/538_ConvertBSTtoGreaterTree";

function buildTree(levels: (number | null)[]): Node<number> | null {
    if (levels.length === 0 || levels[0] === null) return null;

    const root: Node<number> = { val: levels[0]!, left: null, right: null };
    const queue: (Node<number> | null)[] = [root];
    let levelIndex = 1;

    while (levelIndex < levels.length) {
        const node = queue.shift();

        if (node) {
            const leftVal = levels[levelIndex++];
            if (typeof leftVal === "number") {
                node.left = { val: leftVal, left: null, right: null };
                queue.push(node.left);
            }

            if (levelIndex < levels.length) {
                const rightVal = levels[levelIndex++];
                if (typeof rightVal === "number") {
                    node.right = { val: rightVal, left: null, right: null };
                    queue.push(node.right);
                }
            }
        }
    }

    return root;
}

function bstToArray(root: Node<number> | null): number[] {
    const result: number[] = [];

    function inOrder(node: Node<number> | null) {
        if (!node) return;
        inOrder(node?.left || null);
        result.push(node.val);
        inOrder(node?.right || null);
    }

    inOrder(root);
    return result;
}

describe("ConvertBSTtoGreaterTree", () => {
    test("converts an empty tree", () => {
        expect(ConvertBSTtoGreaterTree(null)).toBeNull();
    });

    test("converts a single-node tree", () => {
        const root = buildTree([1]);
        const converted = ConvertBSTtoGreaterTree(root);
        expect(bstToArray(converted)).toEqual([1]);
    });

    test("converts a larger tree", () => {
        const root = buildTree([
            4,
            1,
            6,
            0,
            2,
            5,
            7,
            null,
            null,
            null,
            3,
            null,
            null,
            null,
            8,
        ]);
        const converted = ConvertBSTtoGreaterTree(root);
        expect(bstToArray(converted)).toEqual([
            36, 36, 35, 33, 30, 26, 21, 15, 8,
        ]);
    });

    test("converts a right-skewed tree", () => {
        const root = buildTree([1, null, 2, null, 3, null, 4]);
        const converted = ConvertBSTtoGreaterTree(root);
        expect(bstToArray(converted)).toEqual([10, 9, 7, 4]);
    });

    test("converts a left-skewed tree", () => {
        const root = buildTree([4, 3, null, 2, null, 1]);
        const converted = ConvertBSTtoGreaterTree(root);
        expect(bstToArray(converted)).toEqual([10, 9, 7, 4]);
    });
});
