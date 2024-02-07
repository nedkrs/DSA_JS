import BestTimeToBuyAndSellStockWithCooldownTopDown from "../../../../src/09_dynamic_programming/2D/leetcode/medium/309_BestTimeToBuyAndSellStockWithCooldownTopDown";

test("empty or single-element array", () => {
    expect(BestTimeToBuyAndSellStockWithCooldownTopDown([])).toBe(0);
    expect(BestTimeToBuyAndSellStockWithCooldownTopDown([1])).toBe(0);
});

test("increasing price array", () => {
    expect(BestTimeToBuyAndSellStockWithCooldownTopDown([1, 2, 3, 4, 5])).toBe(
        4,
    );
});

test("decreasing price array", () => {
    expect(BestTimeToBuyAndSellStockWithCooldownTopDown([5, 4, 3, 2, 1])).toBe(
        0,
    );
});

test("prices fluctuating", () => {
    expect(BestTimeToBuyAndSellStockWithCooldownTopDown([1, 2, 3, 0, 2])).toBe(
        3,
    );
});

test("multiple buying and selling opportunities", () => {
    expect(
        BestTimeToBuyAndSellStockWithCooldownTopDown([6, 1, 3, 2, 4, 7]),
    ).toBe(6);
});
