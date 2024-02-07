import HouseRobberBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/198_HouseRobberBottomUp";

describe("HouseRobberBottomUp", () => {
    test("typical case", () => {
        expect(HouseRobberBottomUp([1, 2, 3, 1])).toEqual(4);
    });

    test("all houses with the same amount", () => {
        expect(HouseRobberBottomUp([2, 2, 2, 2])).toEqual(4);
    });

    test("increasing amounts", () => {
        expect(HouseRobberBottomUp([1, 2, 3, 4])).toEqual(6);
    });

    test("single house", () => {
        expect(HouseRobberBottomUp([3])).toEqual(3);
    });

    test("two houses", () => {
        expect(HouseRobberBottomUp([2, 3])).toEqual(3);
    });

    test("empty list of houses", () => {
        expect(HouseRobberBottomUp([])).toEqual(0);
    });

    test("large numbers", () => {
        expect(HouseRobberBottomUp([100, 1, 1, 100, 1])).toEqual(200);
    });
});
