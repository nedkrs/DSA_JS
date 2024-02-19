import bfs from "../../../src/07_trees/binary_tree/BinaryTreeBFS";
import { tree } from "../../fixtures/tree";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});
