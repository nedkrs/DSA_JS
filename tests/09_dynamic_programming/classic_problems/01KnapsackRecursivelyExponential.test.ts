import knapsack from "../../../src/09_dynamic_programming/classic_problems/01KnapsackRecursivelyExponential";

test("01KnapsackRecursivelyExponential", function () {
    let v = [6, 10, 12];
    let w = [1, 2, 3];
    let W = 5;
    expect(knapsack(v, w, W)).toEqual(22);
});
