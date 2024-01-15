import bt_pre_order from "../src/BinaryTreePreOrder";
import { tree } from "../tests/fixtures/tree";

test("Pre order", function () {
    expect(bt_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
