import CutRod from "../src/RodCuttingExponential";

test("RodCuttingExponential", function () {
    const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let r = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

    CutRod(p, 4);
    expect(CutRod(p, 4)).toEqual(r[4]);
    expect(CutRod(p, 5)).toEqual(r[5]);
    expect(CutRod(p, 6)).toEqual(r[6]);
    expect(CutRod(p, 1)).toEqual(r[1]);
    expect(CutRod(p, 0)).toEqual(r[0]);
    expect(CutRod(p, 9)).toEqual(r[9]);
});

// i  0  1  2  3   4   5   6   7   8   9  10   rod length
// p  0  1  5  8   9  10  17  17  20  24  30   price per length
// r  0  1  5  8  10  13  17  18  22  25  30   max revenue per length
