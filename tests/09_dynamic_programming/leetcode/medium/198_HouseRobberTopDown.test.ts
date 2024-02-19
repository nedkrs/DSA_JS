import HouseRobberTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/198_HouseRobberTopDown";

describe("HouseRobberTopDown", () => {
    test("typical case", () => {
        expect(HouseRobberTopDown([1, 2, 3, 1])).toEqual(4);
    });

    test("all houses with the same amount", () => {
        expect(HouseRobberTopDown([2, 2, 2, 2])).toEqual(4);
    });

    test("increasing amounts", () => {
        expect(HouseRobberTopDown([1, 2, 3, 4])).toEqual(6);
    });

    test("single house", () => {
        expect(HouseRobberTopDown([3])).toEqual(3);
    });

    test("two houses", () => {
        expect(HouseRobberTopDown([2, 3])).toEqual(3);
    });

    test("large numbers", () => {
        expect(HouseRobberTopDown([100, 1, 1, 100, 1])).toEqual(200);
    });
});
