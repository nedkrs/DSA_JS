import CoinChangeBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/322_CoinChangeBottomUp";

describe("CoinChangeBottomUp", () => {
    test("typical case", () => {
        expect(CoinChangeBottomUp([1, 2, 5], 11)).toEqual(3); // 5 + 5 + 1
    });

    test("exact match with one coin type", () => {
        expect(CoinChangeBottomUp([2], 4)).toEqual(2); // 2 + 2
    });

    test("no solution possible", () => {
        expect(CoinChangeBottomUp([2], 3)).toEqual(-1);
    });

    test("amount is zero", () => {
        expect(CoinChangeBottomUp([1, 2, 5], 0)).toEqual(0);
    });

    test("multiple coin types", () => {
        expect(CoinChangeBottomUp([1, 3, 4], 6)).toEqual(2); // 3 + 3
    });

    test("large amount with large coin values", () => {
        expect(CoinChangeBottomUp([30, 50, 100], 130)).toEqual(2); // 100 + 30
    });

    test("empty coin array", () => {
        expect(CoinChangeBottomUp([], 5)).toEqual(-1);
    });
});
