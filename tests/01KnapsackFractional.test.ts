import knapsack from "../src/01KnapsackFractional";

test("01KnapsackFractional", function () {
    let v = [6, 10, 12];
    let w = [1, 2, 3];
    let W = 5;
    expect(knapsack(v, w, W)).toEqual([
        { f: 1, v: 6, w: 1 },
        { f: 1, v: 10, w: 2 },
        { f: 0.6666666666666666, v: 12, w: 3 },
    ]);
});
