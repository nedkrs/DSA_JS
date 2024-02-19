import bt_in_order from "../../../src/07_trees/binary_tree/BinaryTreeInOrder";
import { tree } from "../../fixtures/tree";

test("in_order", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
