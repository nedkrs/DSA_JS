import UniquePathsBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/62_UniquePathsBottomUp";

test("basic grid 2x2", () => {
    expect(UniquePathsBottomUp(2, 2)).toBe(2);
});

test("1x1 grid", () => {
    expect(UniquePathsBottomUp(1, 1)).toBe(1);
});

test("1xn grid", () => {
    expect(UniquePathsBottomUp(1, 5)).toBe(1);
});

test("mx1 grid", () => {
    expect(UniquePathsBottomUp(5, 1)).toBe(1);
});

test("larger grid 3x3", () => {
    expect(UniquePathsBottomUp(3, 3)).toBe(6);
});

test("larger grid 3x7", () => {
    expect(UniquePathsBottomUp(3, 7)).toBe(28);
});

test("maximum reasonable grid size", () => {
    expect(UniquePathsBottomUp(10, 10)).toBe(48620);
});
