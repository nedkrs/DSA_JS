import BurstBalloons from "../../../../src/09_dynamic_programming/leetcode/hard/312_BurstBalloons";

describe("BurstBalloons", () => {
    test("computes maximum coins for a single balloon", () => {
        expect(BurstBalloons([3])).toBe(3);
    });

    test("computes maximum coins for [3, 1, 5, 8]", () => {
        expect(BurstBalloons([3, 1, 5, 8])).toBe(167);
    });

    test("computes maximum coins for an empty array", () => {
        expect(BurstBalloons([])).toBe(0);
    });

    test("computes maximum coins for [1, 5]", () => {
        expect(BurstBalloons([1, 5])).toBe(10);
    });

    test("computes maximum coins for [2, 3, 7]", () => {
        expect(BurstBalloons([2, 3, 7])).toBe(63);
    });
});
