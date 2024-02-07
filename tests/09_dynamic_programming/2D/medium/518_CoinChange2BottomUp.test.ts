import CoinChange2BottomUp from "../../../../src/09_dynamic_programming/2D/leetcode/medium/518_CoinChange2BottomUp";

test("basic functionality with a small set of coins and amount", () => {
    expect(CoinChange2BottomUp(5, [1, 2, 5])).toBe(4);
});

test("no combinations possible", () => {
    expect(CoinChange2BottomUp(3, [2])).toBe(0);
});

test("single coin case", () => {
    expect(CoinChange2BottomUp(10, [5])).toBe(1);
});

test("large amount with multiple coins", () => {
    expect(CoinChange2BottomUp(100, [1, 2, 5])).toBe(541);
});

test("amount is zero", () => {
    expect(CoinChange2BottomUp(0, [1, 2, 5])).toBe(1);
});
