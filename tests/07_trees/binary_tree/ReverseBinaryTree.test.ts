import reverse_bt from "../../../src/07_trees/binary_tree/ReverseBinaryTree";
import bt_in_order from "../../../src/07_trees/binary_tree/BinaryTreeInOrder";
import { tree } from "../../fixtures/tree";

test("reverse_bt", function () {
    let in_order1 = bt_in_order(tree);
    let reversed = reverse_bt(tree);
    let in_order2 = bt_in_order(reversed);

    expect(in_order1.reverse()).toEqual(in_order2);
});
