import UniqueBinarySearchTrees from "../../../../src/07_trees/leetcode/medium/96_UniqueBinarySearchTrees";

describe("UniqueBinarySearchTrees", () => {
    test("calculates unique BSTs for n = 1", () => {
        expect(UniqueBinarySearchTrees(1)).toBe(1);
    });

    test("calculates unique BSTs for n = 2", () => {
        expect(UniqueBinarySearchTrees(2)).toBe(2);
    });

    test("calculates unique BSTs for n = 3", () => {
        expect(UniqueBinarySearchTrees(3)).toBe(5);
    });

    test("calculates unique BSTs for n = 4", () => {
        expect(UniqueBinarySearchTrees(4)).toBe(14);
    });

    test("calculates unique BSTs for n = 5", () => {
        expect(UniqueBinarySearchTrees(5)).toBe(42);
    });
});
