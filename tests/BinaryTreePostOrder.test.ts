import bt_post_order from "../src/BinaryTreePostOrder";
import { tree } from "./fixtures/tree";

test("post_order", function () {
    expect(bt_post_order(tree)).toEqual([
        7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
    ]);
});
