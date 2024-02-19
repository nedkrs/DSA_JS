import ProductOfArrayExceptSelf from "../../../../src/01_arrays/leetcode/medium/238_ProductOfArrayExceptSelf";

describe("ProductOfArrayExceptSelf", () => {
    test("test case 1", () => {
        expect(ProductOfArrayExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });

    test("test case 2", () => {
        expect(ProductOfArrayExceptSelf([-1, 1, 0, -3, 3])).toEqual([
            -0, 0, 9, -0, 0,
        ]);
    });

    test("edge case with two elements", () => {
        expect(ProductOfArrayExceptSelf([0, 0])).toEqual([0, 0]);
    });

    test("array with one positive and one negative number", () => {
        expect(ProductOfArrayExceptSelf([-1, 3])).toEqual([3, -1]);
    });

    test("array with all elements being the same", () => {
        expect(ProductOfArrayExceptSelf([2, 2, 2, 2])).toEqual([8, 8, 8, 8]);
    });
});
