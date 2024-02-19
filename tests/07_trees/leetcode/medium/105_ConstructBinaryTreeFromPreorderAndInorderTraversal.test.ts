import ConstructBinaryTreeFromPreorderAndInorderTraversal, {
    TreeNode,
} from "../../../../src/07_trees/leetcode/medium/105_ConstructBinaryTreeFromPreorderAndInorderTraversal";

const treeToArray = (root: TreeNode | null): (number | null)[] => {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    while (queue.length) {
        const current = queue.shift();
        if (current) {
            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
};

test("constructs binary tree from preorder and inorder traversal", () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const expectedOutput = [3, 9, 20, null, null, 15, 7];
    const constructedTree = ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder,
        inorder,
    );
    expect(treeToArray(constructedTree)).toEqual(expectedOutput);
});

test("constructs a complex binary tree", () => {
    const preorder = [1, 2, 4, 5, 3, 6, 7];
    const inorder = [4, 2, 5, 1, 6, 3, 7];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    const constructedTree = ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder,
        inorder,
    );
    expect(treeToArray(constructedTree)).toEqual(expectedOutput);
});

test("handles a single-node tree", () => {
    const preorder = [1];
    const inorder = [1];
    const expectedOutput = [1];
    const constructedTree = ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder,
        inorder,
    );
    expect(treeToArray(constructedTree)).toEqual(expectedOutput);
});
