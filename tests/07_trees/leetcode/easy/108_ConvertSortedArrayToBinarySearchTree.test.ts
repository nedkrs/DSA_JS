import ConvertSortedArrayToBinarySearchTree, {
    Node,
} from "../../../../src/07_trees/leetcode/easy/108_ConvertSortedArrayToBinarySearchTree";

function isHeightBalanced(root: Node<number> | null): boolean {
    function checkHeight(node: Node<number> | null | undefined): {
        balanced: boolean;
        height: number;
    } {
        if (node === null) return { balanced: true, height: -1 };

        const left = checkHeight(node?.left);
        const right = checkHeight(node?.right);

        const balanced =
            left.balanced &&
            right.balanced &&
            Math.abs(left.height - right.height) <= 1;
        const height = 1 + Math.max(left.height, right.height);

        return { balanced, height };
    }

    return checkHeight(root).balanced;
}

function isValidBST(
    root: Node<number> | null,
    min: number = -Infinity,
    max: number = Infinity,
): boolean {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
        isValidBST(root?.left || null, min, root.val) &&
        isValidBST(root?.right || null, root.val, max)
    );
}

describe("ConvertSortedArrayToBinarySearchTree", () => {
    test("converts [-10,-3,0,5,9] into a height-balanced BST", () => {
        const nums = [-10, -3, 0, 5, 9];
        const tree = ConvertSortedArrayToBinarySearchTree(nums);
        expect(isHeightBalanced(tree)).toBe(true);
        expect(isValidBST(tree)).toBe(true);
    });

    test("converts [1,3] into a height-balanced BST", () => {
        const nums = [1, 3];
        const tree = ConvertSortedArrayToBinarySearchTree(nums);
        expect(isHeightBalanced(tree)).toBe(true);
        expect(isValidBST(tree)).toBe(true);
    });

    test("ensures the tree is height-balanced for a large sorted array", () => {
        const nums = Array.from({ length: 1000 }, (_, i) => i - 500);
        const tree = ConvertSortedArrayToBinarySearchTree(nums);
        expect(isHeightBalanced(tree)).toBe(true);
        expect(isValidBST(tree)).toBe(true);
    });

    test("handles a single element array", () => {
        const nums = [1];
        const tree = ConvertSortedArrayToBinarySearchTree(nums);
        expect(isHeightBalanced(tree)).toBe(true);
        expect(isValidBST(tree)).toBe(true);
        expect(tree).toEqual({ val: 1, left: null, right: null });
    });

    test("handles an empty array", () => {
        const nums: number[] = [];
        const tree = ConvertSortedArrayToBinarySearchTree(nums);
        expect(tree).toBeNull();
    });
});
