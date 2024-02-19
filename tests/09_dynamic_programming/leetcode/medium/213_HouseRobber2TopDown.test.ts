import HouseRobber2TopDown from "../../../../src/09_dynamic_programming/leetcode/medium/213_HouseRobber2TopDown";

describe("HouseRobber2TopDown", () => {
    test("typical case with non-circular maximum at end", () => {
        expect(HouseRobber2TopDown([2, 3, 2])).toEqual(3);
    });

    test("typical case with non-circular maximum at beginning", () => {
        expect(HouseRobber2TopDown([3, 2, 3])).toEqual(3);
    });

    test("all houses with the same amount", () => {
        expect(HouseRobber2TopDown([2, 2, 2])).toEqual(2);
    });

    test("increasing amounts", () => {
        expect(HouseRobber2TopDown([1, 2, 3, 1])).toEqual(4);
    });

    test("single house", () => {
        expect(HouseRobber2TopDown([3])).toEqual(3);
    });

    test("two houses", () => {
        expect(HouseRobber2TopDown([2, 3])).toEqual(3);
    });
});
