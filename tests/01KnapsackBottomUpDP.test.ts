import knapsack from "../src/01KnapsackBottomUpDP";

test("01KnapsackBottomUpDP", function () {
    let v = [6, 10, 12];
    let w = [1, 2, 3];
    let W = 5;
    expect(knapsack(v, w, W)).toEqual(22);
});
