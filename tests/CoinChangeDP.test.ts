import coin_change from "../src/CoinChangeDP";

test("coin_change", function () {
    expect(coin_change([1, 3, 4], 6)).toEqual(2);
    expect(coin_change([1, 2, 5], 11)).toEqual(3);
    expect(coin_change([2, 4], 7)).toEqual(Infinity);
    expect(coin_change([1], 0)).toEqual(0);
    expect(coin_change([1, 3, 4], 4)).toEqual(1);
    expect(coin_change([1, 3, 4, 5], 100)).toEqual(20);
    expect(coin_change([1, 2, 2, 5], 11)).toEqual(3);
    expect(coin_change([1, 2, 5, 10, 20, 50, 100, 200, 500], 300)).toEqual(2);
    expect(coin_change([1, 2, 5], 0)).toEqual(0);
    expect(coin_change([5, 1, 2], 11)).toEqual(3);
});
