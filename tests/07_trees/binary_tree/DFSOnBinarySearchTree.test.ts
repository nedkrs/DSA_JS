import dfs_on_bst from "../../../src/07_trees/binary_tree/DFSOnBinarySearchTree";
import { tree } from "../../fixtures/tree";

test("dfs_on_bst", function () {
    expect(dfs_on_bst(tree, 45)).toEqual(true);
    expect(dfs_on_bst(tree, 7)).toEqual(true);
    expect(dfs_on_bst(tree, 69)).toEqual(false);
});
