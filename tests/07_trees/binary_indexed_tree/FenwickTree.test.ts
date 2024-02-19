import FenwickTree from "../../../src/07_trees/binary_indexed_tree/FenwickTree";

describe("FenwickTree", () => {
    test("constructLinear should correctly initialize the tree", () => {
        const inputArray = [3, 2, -1, 6, 5];
        const fenwickTree = new FenwickTree(inputArray);
        expect(fenwickTree.display()).toEqual([0, 3, 5, -1, 10, 5]);
    });

    test("rangeSum should correctly compute the range sum", () => {
        const inputArray = [3, 2, -1, 6, 5];
        const fenwickTree = new FenwickTree(inputArray);
        expect(fenwickTree.rangeSum(1, 3)).toBe(4); // sum of elements from index 1 to 3
        expect(fenwickTree.rangeSum(2, 4)).toBe(7); // sum of elements from index 2 to 4
    });

    test("pointUpdate should correctly update the value at a specific point", () => {
        const inputArray = [3, 2, -1, 6, 5];
        const fenwickTree = new FenwickTree(inputArray);
        fenwickTree.pointUpdate(3, 4); // update index 3 by adding 4
        expect(fenwickTree.display()).toEqual([0, 3, 5, 3, 14, 5]);
        expect(fenwickTree.rangeSum(2, 4)).toBe(11); // sum of elements from index 2 to 4 after update
    });

    test("pointUpdate should not affect unrelated ranges", () => {
        const inputArray = [3, 2, -1, 6, 5];
        const fenwickTree = new FenwickTree(inputArray);
        fenwickTree.pointUpdate(1, 2); // update index 1 by adding 2
        expect(fenwickTree.rangeSum(3, 4)).toBe(5); // sum of elements from index 3 to 4 should remain unchanged
    });
});
