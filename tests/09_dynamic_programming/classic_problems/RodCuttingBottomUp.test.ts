import RodCuttingBottomUp from "../../../src/09_dynamic_programming/classic_problems/RodCuttingBottomUp";

test("RodCuttingBottomUp", function () {
    const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let r = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

    expect(RodCuttingBottomUp(p, 4)).toEqual(r[4]);
    expect(RodCuttingBottomUp(p, 5)).toEqual(r[5]);
    expect(RodCuttingBottomUp(p, 6)).toEqual(r[6]);
    expect(RodCuttingBottomUp(p, 1)).toEqual(r[1]);
    expect(RodCuttingBottomUp(p, 0)).toEqual(r[0]);
    expect(RodCuttingBottomUp(p, 9)).toEqual(r[9]);
});

// i  0  1  2  3   4   5   6   7   8   9  10   rod length
// p  0  1  5  8   9  10  17  17  20  24  30   price per length
// r  0  1  5  8  10  13  17  18  22  25  30   max revenue per length
