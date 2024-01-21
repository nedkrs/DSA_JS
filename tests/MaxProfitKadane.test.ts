import max_profit from "../src/MaxProfitKadane";

test("max_profit", function () {
    expect(max_profit([23171, 21011, 21123, 21366, 21013, 21367])).toEqual(356);
});
