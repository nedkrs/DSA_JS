import CoinChange2TopDown from "../../../../src/09_dynamic_programming/leetcode/medium/518_CoinChange2TopDown";

test("basic functionality with a small set of coins and amount", () => {
    expect(CoinChange2TopDown(5, [1, 2, 5])).toBe(4);
});

test("no combinations possible", () => {
    expect(CoinChange2TopDown(3, [2])).toBe(0);
});

test("single coin case", () => {
    expect(CoinChange2TopDown(10, [5])).toBe(1);
});

test("large amount with multiple coins", () => {
    expect(CoinChange2TopDown(100, [1, 2, 5])).toBe(541);
});

test("amount is zero", () => {
    expect(CoinChange2TopDown(0, [1, 2, 5])).toBe(1);
});
